import { venues } from "../data/venues.mjs";

const venuesCardList = document.querySelector(".venues-list");

function renderVenues(venuesList) {
    venuesList.forEach(venue => {
        const venueCard = document.createElement("article");
        const venueName = document.createElement("h3");
        const venuePhotograph = document.createElement("figure");
        const venueAddress = document.createElement("address");
        const venueDescription = document.createElement("p");
        const venueAmenities = document.createElement("ul");
        const venuePrice = document.createElement("div");
        const venueButton = document.createElement("button");

        venueName.textContent = venue.name;
        
        const venueImage = document.createElement("img");
        venueImage.src = venue.photo;
        venueImage.alt = `${venue.name} Photograph`;
        venueImage.loading = "lazy";
        venueImage.width = 300;
        venueImage.height = 200;

        venuePhotograph.appendChild(venueImage);

        venueAddress.textContent = venue.address;

        venueDescription.classList.add("description");
        venueDescription.textContent = venue.description;

        venueAmenities.classList.add("amenities-block");

        venueAmenities.classList.add("amenities");
        for (const amenity of venue.amenities) {
            const amenityElement = document.createElement("li");
            amenityElement.textContent = amenity;
            venueAmenities.appendChild(amenityElement);
        }

        venuePrice.classList.add("price");
        const priceLabel = document.createElement("strong");
        priceLabel.textContent = "Price: ";

        const costInput = document.createElement("span");
        costInput.classList.add("cost");
        costInput.textContent = venue.cost;

        venuePrice.appendChild(priceLabel);
        venuePrice.appendChild(costInput);

        venueButton.classList.add("button-like");
        venueButton.classList.add("primary");

        venueButton.textContent = "learn More";

        venueCard.appendChild(venueName);
        venueCard.appendChild(venuePhotograph);
        venueCard.appendChild(venueAddress);
        venueCard.appendChild(venueDescription);
        venueCard.appendChild(venueAmenities);
        venueCard.appendChild(venuePrice);
        venueCard.appendChild(venueButton);

        venuesCardList.appendChild(venueCard);
    });
}

renderVenues(venues);