const footerCurrentYear = document.getElementById("current-year");
const lastModified = document.getElementById("lastModified");

const today = new Date();

footerCurrentYear.textContent = today.getFullYear();
lastModified.textContent = `Last Modified on ${document.lastModified}`;