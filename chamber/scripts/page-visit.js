// Handles the last Visit of the page, the number of visit today

const now = Date.now();
let lastVisit = localStorage.getItem("lastVisit");

console.log(today);


const messageDisplay = document.getElementById("messageDisplay");

if (!lastVisit) {
    messageDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {

    console.log(lastVisit);
    
    const date = new Date(lastVisit);
    console.log(date);

    if (now - lastVisit <= 86400) {
        messageDisplay.textContent = "Back So Soon!"
    }

}

localStorage.setItem("lastVisit", now);