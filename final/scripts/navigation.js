const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("header nav");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        const isOpen = hamburger.classList.toggle("open");
        navMenu.classList.toggle("open", isOpen);
        hamburger.setAttribute("aria-expanded", String(isOpen));
        hamburger.setAttribute(
            "aria-label",
            isOpen ? "Close Navigation Menu" : "Open Navigation Menu"
        );
        hamburger.setAttribute(
            "title",
            isOpen ? "Close Navigation Menu" : "Open Navigation Menu"
        );
    });
}

const currentPage = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("header nav a, .internal-links a").forEach((link) => {
  const linkPage = new URL(link.href).pathname.split("/").pop() || "index.html";
  if (linkPage === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});