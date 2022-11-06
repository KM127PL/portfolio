
function setTheme(theme: string) {
    // update the body
    const body = document.body;
    body.classList.remove('theme-light', 'theme-dark');
    body.classList.add(`theme-${theme}`);

    // update the button
    const button = document.getElementById('theme-icon');
    button.classList.remove('fa-sun', 'fa-moon');
    button.classList.add(theme === 'light' ? 'fa-moon' : 'fa-sun');

    // update local storage
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    setTheme(theme === 'light' ? 'dark' : 'light');
}

document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme') || 'light';
    setTheme(theme);
});

// Path: src\index.ts