const themeToggleButton = document.querySelector("header .toggle-theme");

themeToggleButton.addEventListener("click", () => {
    themeToggleButton.classList.toggle("dark");
});