const themeToggleButton = document.querySelector("header .toggle-theme");
const rootElement = document.querySelector(":root");

let savedTheme = localStorage.getItem("theme");
let isDarkMode = rootElement.getAttribute("data-theme") == "dark";

if (savedTheme == "dark") {
    toggleTheme(true);
}


themeToggleButton.addEventListener("click", () => {
    if (isDarkMode) {
        toggleTheme(false);
    } else {
        toggleTheme(true);
    }
});

function toggleTheme(dark) {
    if (dark) {
        themeToggleButton.classList.toggle("dark", true);
        localStorage.setItem("theme", "dark");
        rootElement.setAttribute("data-theme", "dark");
        isDarkMode = true;
    } else {
        themeToggleButton.classList.toggle("dark", false);
        localStorage.setItem("theme", "light");
        rootElement.setAttribute("data-theme", "light");
        isDarkMode = false;
    }
}

toggleTheme(true);