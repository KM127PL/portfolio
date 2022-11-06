function setDarkMode(theme) {
    var element = document.body;
    var button = document.getElementsByClassName("dark-mode-icon")[0];
    // set data-theme attribute
    element.attributes["data-theme"].value = theme;
    // set localStorage
    localStorage.setItem("theme", element.attributes["data-theme"].value);

    // set theme
    if (element.attributes["data-theme"].value === "dark") {
        element.classList.add("dark-mode");
        element.classList.remove("light-mode");
        button.classList.remove("fa-moon");
        button.classList.add("fa-sun");
    }
    else {
        element.classList.remove("dark-mode");
        element.classList.add("light-mode");

        button.classList.remove("fa-sun");
        button.classList.add("fa-moon");
    }
}

function toggleDarkMode() {
    if (localStorage.getItem("theme") === "dark") {
        setDarkMode("light");
    }
    else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode("dark");
        } else {
            setDarkMode("light");
        }
    }
    
}

document.addEventListener("DOMContentLoaded", function () {
    // set theme
    setDarkMode(localStorage.getItem("theme"));

});