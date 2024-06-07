// JavaScript for theme toggle (light/dark mode)
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Toggle the theme icon
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.textContent = '🌙'; // Moon icon for dark mode
        } else {
            themeIcon.textContent = '☀️'; // Sun icon for light mode
        }
    });
});

