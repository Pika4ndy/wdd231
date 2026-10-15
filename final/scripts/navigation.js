const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("header nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navMenu.classList.toggle("open");
});

const currentPage = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("header nav a, .internal-links a").forEach((link) => {
  const linkPage = new URL(link.href).pathname.split("/").pop() || "index.html";
  if (linkPage === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});