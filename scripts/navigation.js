navButton = document.getElementById("nav-button");
navMenu = document.querySelector(".nav-menu");

navButton.addEventListener("click", e => {
    navButton.classList.toggle("show");
    navMenu.classList.toggle("open");
});