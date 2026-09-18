const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";

const cards = document.getElementById("cards");

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();

    // console.table(data.prophets);
    displayProphets(data.prophets);
}

function displayProphets(prophetsArray) {
    prophetsArray.forEach(prophet => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");

        const birthDate = document.createElement("p");
        const birthPlace = document.createElement("p");

        card.classList.add("card");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.src = prophet.imageurl;
        portrait.alt = `Portrait of Prophet ${prophet.name} ${prophet.lastname}`;
        portrait.loading = "lazy";
        portrait.width = 340;
        portrait.setAttribute("height", 440);

        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData();