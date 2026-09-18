const hamburgerButton = document.querySelector(".hamburger-menu");
const nav = document.getElementById("navigationMenu");
const navLinks = document.querySelectorAll("header li a");

let isOpen = false;

hamburgerButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    nav.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
    isOpen = !isOpen;

    if (isOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
}

document.addEventListener("click", (e) => {
    const clickedInsideMenu = nav.contains(e.target);
    const clickedHamburger = hamburgerButton.contains(e.target);

    if (isOpen && !clickedInsideMenu && !clickedHamburger) {
        toggleMenu();
    }
});

navLinks.forEach((link) => link.addEventListener("click", toggleMenu));