const urlParams = new URLSearchParams(window.location.search);

const firstName = urlParams.get("first-name");
const lastName = urlParams.get("last-name");
const organizationTitle = urlParams.get("title");
const email = urlParams.get("email");
const phoneNumber = urlParams.get("phone");
const organizationName = urlParams.get("organization-name");
const organizationDescription = urlParams.get("organization-description");
const membershipLevel = urlParams.get("membership-level");
const timestamp = urlParams.get("timestamp");

const timestampDisplay = document.getElementById("timestamp");
const fullNameDisplay = document.getElementById("fullName");
const titleDisplay = document.getElementById("organizationTitle");
const emailDisplay = document.getElementById("email");
const phoneDisplay = document.getElementById("phone");
const organizationNameDisplay = document.getElementById("organizationName");
const membershipLevelDisplay = document.getElementById("membershipLevel");
const organizationDescriptionDisplay = document.getElementById("organizationDescription");

const filledDay = new Date(timestamp);

function renderReview() {
    timestampDisplay.textContent = filledDay.toUTCString();
    
    fullNameDisplay.textContent = `${lastName}, ${firstName}`;
    titleDisplay.textContent = organizationTitle;
    emailDisplay.textContent = email;
    phoneDisplay.textContent = phoneNumber;
    organizationNameDisplay.textContent = organizationName;
    membershipLevelDisplay.textContent = membershipLevel;
    organizationDescriptionDisplay.textContent = organizationDescription;
}

renderReview();