const spotlightSection = document.querySelector(".spotlights");

async function renderSpotlights() {
	try {
		const response = await fetch("./data/members.json");
		if (!response.ok) {
			throw new Error(`Unable to load members: ${response.status}`);
		}

		const { members } = await response.json();
		const goldMembers = pickRandomMembers(members.filter((member) => member.membership.level === 3), 2);
		const silverMembers = pickRandomMembers(members.filter((member) => member.membership.level === 2), 1);

		spotlightSection.replaceChildren(spotlightSection.querySelector("h2"));
		[...goldMembers, ...silverMembers].forEach((member) => {
			spotlightSection.appendChild(createSpotlight(member));
		});
	} catch (error) {
		console.error("Could not render member spotlights.", error);
		const message = document.createElement("p");
		message.textContent = "Member spotlights are currently unavailable.";
		spotlightSection.appendChild(message);
	}
}

function pickRandomMembers(members, count) {
	const availableMembers = [...members];
	const selectedMembers = [];

	while (availableMembers.length && selectedMembers.length < count) {
		const randomIndex = Math.floor(Math.random() * availableMembers.length);
		selectedMembers.push(availableMembers.splice(randomIndex, 1)[0]);
	}

	return selectedMembers;
}

function createSpotlight(member) {
	const isGold = member.membership.level === 3;
	const tier = isGold ? "gold" : "silver";
	const card = document.createElement("article");
	card.classList.add(tier);

	const memberLevel = document.createElement("span");
	memberLevel.classList.add("memberLevel", tier);
	memberLevel.textContent = `${isGold ? "Gold" : "Silver"} Member`;
	card.appendChild(memberLevel);

	const name = document.createElement("h3");
	name.textContent = member.name;
	card.appendChild(name);

	const image = document.createElement("img");
	image.src = member.heroImage;
	image.alt = member.name;
	image.loading = "lazy";
	card.appendChild(image);

	const categories = document.createElement("div");
	categories.classList.add("categories");
	[member.categories.primarySector, ...member.categories.subcategories].forEach((category) => {
		const categoryLabel = document.createElement("span");
		categoryLabel.classList.add("member-category");
		categoryLabel.textContent = category;
		categories.appendChild(categoryLabel);
	});
	card.appendChild(categories);

	const tagline = document.createElement("p");
	tagline.classList.add("member-tagline");
	tagline.textContent = member.tagline;
	card.appendChild(tagline);

	const memberInfo = document.createElement("div");
	memberInfo.classList.add("memberInfo");

	if (isGold) {
		appendInfo(memberInfo, "Member since", member.membership.memberSince);
		appendInfo(memberInfo, "Established", member.yearFounded);
	}

	const contacts = document.createElement("div");
	contacts.classList.add("contacts");
	if (isGold) {
		appendInfo(contacts, "Address", member.contact.address);
		appendInfo(contacts, "Email", member.contact.email, `mailto:${member.contact.email}`);
	}
	appendInfo(contacts, "Phone", member.contact.phone, `tel:${member.contact.phone.replaceAll(" ", "")}`);

	const website = document.createElement("a");
	website.href = member.contact.websiteUrl;
	website.target = "_blank";
	website.rel = "noopener noreferrer";
	website.textContent = "Visit website";
	contacts.appendChild(website);

	memberInfo.appendChild(contacts);
	card.appendChild(memberInfo);
	return card;
}

function appendInfo(container, label, value, href) {
	const item = document.createElement(href ? "a" : "span");
	item.textContent = `${label}: ${value}`;
	if (href) {
		item.href = href;
	}
	container.appendChild(item);
}

renderSpotlights();
