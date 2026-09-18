const memberListSection = document.getElementById("memberList");

async function fetchMembersData() {
    const response = await fetch("./data/members.json");

    const data = await response.json();

    data.members.forEach(
        (member, index) => {
            createCard(member, index === 0);
        }
    );
}

function createCard(member, isFirst) {
    const card = document.createElement("article");
    const logoImage = document.createElement("img");
    const heroImage = document.createElement("img");
    const businessName = document.createElement("h2");
    const tagLine = document.createElement("p");
    const line = document.createElement("hr");

    const businessDetails = document.createElement("div");
    const email = document.createElement("div");
    const phone = document.createElement("div");
    const url = document.createElement("div");

    card.classList.add("card");

    logoImage.src = member.logo;
    logoImage.alt = `${member.name} Logo`;
    logoImage.setAttribute("width", 60);
    logoImage.setAttribute("height", 60);
    logoImage.classList.add("simple-logo");
    logoImage.decoding = "async";
    logoImage.loading = isFirst ? "eager" : "lazy";

    heroImage.src = member.heroImage;
    heroImage.alt = `${member.name} Hero Image`;
    heroImage.setAttribute("width", 300);
    heroImage.setAttribute("height", 80);
    heroImage.classList.add("hero-logo");
    heroImage.decoding = "async";
    heroImage.loading = isFirst ? "eager" : "lazy";
    if (isFirst) {
        heroImage.setAttribute("fetchpriority", "high");
    }

    businessName.textContent = member.name;
    tagLine.textContent = member.tagline;
    tagLine.classList.add("small-description");

    businessDetails.classList.add("business-details");
    email.textContent = member.contact.email;
    phone.textContent = member.contact.phone;
    url.innerHTML = `<a href="${member.contact.websiteUrl}">${member.contact.websiteUrl}</a>`;

    businessDetails.appendChild(email);
    businessDetails.appendChild(phone);
    businessDetails.appendChild(url);

    card.appendChild(logoImage);
    card.appendChild(heroImage);
    card.appendChild(businessName);
    card.appendChild(tagLine);
    card.appendChild(line);
    card.appendChild(businessDetails);

    memberListSection.appendChild(card);
}

fetchMembersData();