// Get the button and icons
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Check localStorage for saved theme
const savedTheme = localStorage.getItem('theme');

// Set the default theme to dark if no theme is saved
if (savedTheme === 'dark-theme' || !savedTheme) {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme'); // Save the default dark theme
} else {
    body.classList.remove('dark-theme');
}

// Toggle theme and update localStorage
themeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Save or remove theme in localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
    } else {
        localStorage.setItem('theme', 'light-theme');
    }
});



