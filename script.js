const loadingTimeout = setTimeout(function() {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.display = 'none';
}, 5000); // Hide the loading screen after 5 seconds (adjust as needed)
window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.display = 'none';
});
window.addEventListener('load', function() {
  clearTimeout(loadingTimeout);
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
  const imageIds = [
      'img1', 'img2', 'img3', 'img4', 'img5',
      'img6', 'img7', 'img8', 'img9', 'img10'
  ];

  // Preload images
  imageIds.forEach(id => {
      const img = new Image(); // Create a new Image object
      img.src = document.getElementById(id).src; // Set the source to the existing image src
  });
});
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

        const storageKey = 'theme-preference';
        const logoImage = document.getElementById('logo-image');

        const onClick = () => {
          // Flip current value
          theme.value = theme.value === 'light' ? 'dark' : 'light';
          setPreference();
          updateLogo();
        };
        
        const getColorPreference = () => {
          const storedPreference = localStorage.getItem(storageKey);
          if (storedPreference) return storedPreference;
          return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        };
        
        const setPreference = () => {
          localStorage.setItem(storageKey, theme.value);
          reflectPreference();
        };
        
        const reflectPreference = () => {
          document.firstElementChild.setAttribute('data-theme', theme.value);
          const themeToggleButton = document.querySelector('#theme-toggle');
          if (themeToggleButton) {
            themeToggleButton.setAttribute('aria-label', theme.value);
          }
        };
        
        const updateLogo = () => {
            if (theme.value === 'dark') {
              logoImage.src = 'images/zainlogob.png';
            } else {
              logoImage.src = 'images/zainlogow.png';
            }
          };

        const theme = {
          value: getColorPreference(),
        };
        
        // Set early to prevent page flashes
        reflectPreference();

        const texts = [
            "Hello!",      // English
            "!السلام علیکم",  // Urdu
            "!مرحباً",     // Arabic
            "Hallo!",      // German
            "你好！",     // Chinese
            "Hola!",        // Spanish
            "Merhaba!"     // Turkish
        ];
        
        let index = 0;
        
        function changeHeaderText() {
            const headerElement = document.getElementById('dynamic-header');
            
            // Clear previous text and reset animation
           // Reset animation
            headerElement.textContent = ''; // Clear the text
        
            // Use setTimeout to create typing effect
            setTimeout(() => {
                const currentText = texts[index];
                let charIndex = 0;
        
                // Typing effect
                const typingInterval = setInterval(() => {
                    headerElement.textContent += currentText.charAt(charIndex);
                    charIndex++;
        
                    if (charIndex === currentText.length) {
                        clearInterval(typingInterval);
                        index = (index + 1) % texts.length; // Move to the next text
                    }
                }, 120); // Adjust typing speed here (200ms per character)
        
            }, 300); // Delay before starting typing animation
        
            // Change text every 3 seconds
            setTimeout(changeHeaderText, 4000);
        }
        

        window.onload = () => {
          // Set on load so screen readers can see the latest value on the button
          reflectPreference();
          changeHeaderText();
          updateLogo();
          closemenu();
          // Add click event listener to the theme toggle button
          const themeToggleButton = document.querySelector('#theme-toggle');
          if (themeToggleButton) {
            themeToggleButton.addEventListener('click', onClick);
          }
        };
        
        // Sync with system changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
          theme.value = isDark ? 'dark' : 'light';
          setPreference();
          
        });

    var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "-600px";
        }

        function sendEmail() {
          // Get the values from the form
          var name = document.getElementById('name').value;
          var email = document.getElementById('email').value;
          var message = document.getElementById('message').value;
      
          // Construct the mailto link
          var mailtoLink = 'mailto:mzainjed@gmail.com?subject=Contact%20Form%20Submission&body=' +
                           'Name: ' + encodeURIComponent(name) + '%0D%0A' +
                           'Email: ' + encodeURIComponent(email) + '%0D%0A' +
                           'Message: ' + encodeURIComponent(message);
      
          // Redirect to the mailto link
          window.location.href = mailtoLink;
      
          // Prevent the form from submitting the traditional way
          return false;
      }

// script.js
document.addEventListener('DOMContentLoaded', () => {
  const videoElement = document.getElementById('bgvideo');

  // Optional: Check if the video source is set correctly
  videoElement.src = 'images/compvideo.mp4'; // Ensure the path is correct

  // Add an event listener for error handling
  videoElement.onerror = function() {
      console.error('Error loading video. Please check the file path.');
  };


});