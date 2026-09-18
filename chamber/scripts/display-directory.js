const memberListSection = document.getElementById("memberList");

async function fetchMembersData() {
    const response = await fetch("./data/members.json");

    const data = await response.json();

    data.members.forEach(
        (member) => {
            createCard(member);
        }
    );
}

function createCard(member) {
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
    logoImage.width = 50;
    logoImage.height = 50;
    logoImage.classList.add("simple-logo");
    logoImage.loading = "lazy";

    heroImage.src = member.heroImage;
    heroImage.alt = `${member.name} Hero Image`;
    heroImage.width = 150;
    heroImage.height = 150;
    heroImage.classList.add("hero-logo");
    heroImage.loading = "lazy";

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