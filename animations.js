(() => {
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  // Hero name: letters resolve left to right from random glyphs
  async function scrambleName(el) {
    const text = el.textContent.trim();
    el.setAttribute('aria-label', text);
    el.textContent = '';
    const spans = [];
    let word;
    for (const c of text) {
      if (/\s/.test(c)) {
        word = null;
        const space = document.createElement('span');
        space.className = 'ch'; space.setAttribute('aria-hidden', 'true'); space.textContent = c;
        el.appendChild(space); spans.push(space);
        continue;
      }
      if (!word) {
        word = document.createElement('span');
        word.className = 'name-word'; word.setAttribute('aria-hidden', 'true');
        el.appendChild(word);
      }
      const s = document.createElement('span');
      s.className = 'ch'; s.setAttribute('aria-hidden', 'true'); s.textContent = c;
      word.appendChild(s); spans.push(s);
    }
    if (reduce) return;
    spans.forEach(s => { s.style.minWidth = s.offsetWidth + 'px'; });
    const pool = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghkmnpqrstuvwxyz0123456789#%&';
    const start = performance.now(), per = 70, spin = 420;
    await new Promise(done => {
      (function frame(now) {
        const t = now - start;
        let finished = 0;
        spans.forEach((s, i) => {
          const c = text[i], at = i * per;
          if (c === ' ' || t >= at + spin) { s.textContent = c; finished++; }
          else if (t >= at) s.textContent = pool[(Math.random() * pool.length) | 0];
          else s.textContent = '\u00A0';
        });
        finished === spans.length ? done() : requestAnimationFrame(frame);
      })(start);
    });
  }

  // Greeting in the languages Zain speaks, typed one after another
  async function greetings(el) {
    const list = ['Hello!','Hallo!', 'السلام علیکم!', 'مرحباً',  '你好！', 'Hej!', 'Merhaba!'];
    el.dir = 'auto';
    if (reduce) { el.textContent = list[0]; return; }
    for (let i = 0; ; i = (i + 1) % list.length) {
      el.textContent = '';
      for (const ch of list[i]) { el.textContent += ch; await sleep(110); }
      await sleep(2200);
    }
  }

  // Cursor spotlight on the hero grid
  function spotlight(hero) {
    if (reduce || !matchMedia('(pointer:fine)').matches) return;
    hero.addEventListener('pointermove', e => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty('--mx', e.clientX - r.left + 'px');
      hero.style.setProperty('--my', e.clientY - r.top + 'px');
    });
  }

  // Reveal groups on scroll, staggered inside each parent
  function reveals() {
    const sel = '.sub-title,.row>p,.cardskill,.tab-titles,.card,.contact-left>*,.contact-right';
    const els = [...document.querySelectorAll(sel)];
    els.forEach(el => {
      el.classList.add('rv');
      const sibs = [...el.parentElement.children].filter(c => c.classList.contains('rv'));
      el.style.setProperty('--i', Math.min(sibs.indexOf(el), 4));
    });
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    els.forEach(el => io.observe(el));
  }

  root.classList.add('js');
  document.addEventListener('DOMContentLoaded', async () => {
    reveals();
    spotlight(document.getElementById('header'));
    if (document.fonts && document.fonts.ready) await Promise.race([document.fonts.ready, sleep(1200)]);
    root.classList.add('go');
    greetings(document.getElementById('dynamic-header'));
    await scrambleName(document.querySelector('.header-name'));
  });
})();