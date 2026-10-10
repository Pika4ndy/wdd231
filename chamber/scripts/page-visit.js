// Handles the last Visit of the page, the number of visit today

const today = new Date();
const now = today.getTime();
let lastVisit = localStorage.getItem("lastVisit");

const messageDisplay = document.getElementById("messageDisplay");

const dayToMs = 86400000;

if (!lastVisit) {
    messageDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {
    lastVisit = new Number(lastVisit);

    if (now - lastVisit <= dayToMs) {
        messageDisplay.textContent = "Back so soon! Awesome!";
    } else {
        let daysSince = (now - lastVisit) / dayToMs;
        daysSince = Math.round(daysSince);
        messageDisplay.textContent = `Your last visit was ${daysSince} day${daysSince > 1 ? "s" : ""} ago`;
    }
}

localStorage.setItem("lastVisit", now);