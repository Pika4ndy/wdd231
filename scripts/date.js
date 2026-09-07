const lastModifiedText = document.getElementById("lastModified");
const currentYear = document.getElementById("currentYear");

const today = new Date();

lastModifiedText.textContent = `Last Modified ${document.lastModified}`;

currentYear.textContent = today.getFullYear();

// Age Display manager
const ageDisplay = document.getElementById("myAge");
const birthday = new Date(2008, 9, 7);

const age = today.getFullYear() - birthday.getFullYear();


if (ageDisplay) {
    ageDisplay.textContent = age;
}