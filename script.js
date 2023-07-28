
const elements = document.querySelectorAll('.fade-in');
        const options = {
        root: null,
        threshold: .4
        }
        const callbacks = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
            entry.target.classList.add('active');
            }
        });
        }
        let observer = new IntersectionObserver(callbacks, options);
        elements.forEach(element => {
        observer.observe(element);
        });

        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }
