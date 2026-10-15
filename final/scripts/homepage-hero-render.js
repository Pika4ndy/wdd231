const apiUrl = "https://science.nasa.gov/wp-json/wp/v2/apod-basic/?api_key=yGo5s6jgJh3y684zGAI50nSNRuiGGrJ3a2vk6nEl";

const apodImage = document.getElementById("APOD");
const apodImageContainer = document.querySelector(".hero-image");

const tooltipTitle = document.querySelector(".tooltip-content h4");
const tooltipCredit = document.querySelector(".tooltip-content p");

async function fetchAPOD() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(response.status);
            
        }

        const data = await response.json();
        const todayPicture = data[0];
        
        displayImage(todayPicture);
        
    } catch (error) {
        console.log(error);
        apodImageContainer.textContent = "Today's Picture is unavailable";
        
    }
}

function displayImage(APODdata) {
    apodImage.src = APODdata.hdurl;
    apodImage.alt = APODdata.alt;
    apodImage.loading = "lazy";

    tooltipTitle.innerHTML = `APOD: <a href="${APODdata.permalink}" target="_blank">${APODdata.title}</a>`;
    tooltipCredit.innerHTML = `Credit: ${APODdata.credit}`;
}

fetchAPOD();