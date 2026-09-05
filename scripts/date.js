const lastModifiedText = document.getElementById("lastModified");
const currentYear = document.getElementById("currentYear");

const today = new Date();

lastModifiedText.textContent = `Last Modified ${document.lastModified}`;

currentYear.textContent = today.getFullYear();