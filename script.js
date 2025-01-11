// Get the button and icons
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Check localStorage for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark-theme') {
    body.classList.add('dark-theme');
}

// Toggle theme and update localStorage
themeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Save or remove theme in localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
    } else {
        localStorage.removeItem('theme');
    }
});


const navLinks = document.querySelectorAll('.nav-menu li a');

navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});