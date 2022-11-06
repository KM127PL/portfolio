function setTheme(theme) {
    // update the body
    var body = document.body;
    body.classList.remove('theme-light', 'theme-dark');
    body.classList.add("theme-".concat(theme));
    // update the button
    var button = document.getElementById('theme-icon');
    if (button) {
        button.classList.remove('fa-sun', 'fa-moon');
        button.classList.add(theme === 'light' ? 'fa-moon' : 'fa-sun');
    }
    // update local storage
    localStorage.setItem('theme', theme);
}
function toggleTheme() {
    var theme = localStorage.getItem('theme') || 'light';
    setTheme(theme === 'light' ? 'dark' : 'light');
}
document.addEventListener('DOMContentLoaded', function () {
    var theme = localStorage.getItem('theme') || 'light';
    setTheme(theme);
});
// Path: src\index.ts
//# sourceMappingURL=theme.js.map