const summary = document.getElementById("form-summary");
const formValues = new URLSearchParams(window.location.search);

const fieldLabels = {
    "first-name": "First name",
    "last-name": "Last name",
    email: "Email",
    tel: "Phone number",
    title: "I am a",
    topic: "Topic area",
    "inquired-topic-information": "What you would like to see",
    "receive-email": "Email updates",
};

const valueLabels = {
    title: {
        student: "Student",
        professor: "Professor",
        parent: "Parent",
        passionate: "Passionate about science",
        other: "Other",
    },
    topic: {
        mechanics: "Classical Mechanics",
        thermo: "Thermodynamics",
        waves: "Waves & Sound",
        em: "Electromagnetism",
        optics: "Optics",
        modern: "Modern Physics",
        overall: "Overall Feedback",
    },
};

for (const [name, rawValue] of formValues) {
    const value = rawValue.trim();
    if (!value) continue;

    const row = document.createElement("div");
    const label = document.createElement("dt");
    const content = document.createElement("dd");

    label.textContent =
        fieldLabels[name] ??
        name.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
    content.textContent =
        name === "receive-email"
            ? "Yes"
            : valueLabels[name]?.[value] ?? value;

    row.append(label, content);
    summary.append(row);
}
