const path = document.querySelector('nav a[href^="/' + location.pathname.split("/")[1] + '"]');
path.parentElement.classList.add('active')