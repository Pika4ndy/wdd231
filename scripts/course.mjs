
import { displayCourseDetails } from "./modal.mjs";
let courses, wddCourses, cseCourses;

async function fetchCourses() {
    try {
        const response = await fetch("data/courses.json");
        if (!response.ok) {
            throw new Error(`Failed to fetch courses: ${response.status}`);
        }
        const data = await response.json();

        courses = data.courses;
        wddCourses = courses.filter((course) => course["subject"] === "WDD");
        cseCourses = courses.filter((course) => course["subject"] === "CSE");

        displayCourses(courses);
    } catch (error) {
        console.error(error);
    }
}


const allButton = document.getElementById("allCourses");
const wddButton = document.getElementById("wddCourses");
const cseButton = document.getElementById("cseCourses");

const coursesListDisplay = document.querySelector(".courses-list");

const creditsDisplay = document.getElementById("totalCredits");

function displayCourses(coursesList) {
    coursesListDisplay.replaceChildren();
    const totalCredits = coursesList.reduce((acc, current) => acc + current["credits"], 0);
    const completedCredits = coursesList
        .filter((course) => course["completed"])
        .reduce((acc, current) => acc + current["credits"], 0);

    for (const course of coursesList) {
        const courseDiv = document.createElement("div");
        
        courseDiv.textContent = `${course["subject"]} ${course["number"]}`;
        courseDiv.classList.add("course");

        if (course["completed"]) {
            courseDiv.classList.add("completed");
        }

        coursesListDisplay.appendChild(courseDiv);

        courseDiv.addEventListener("click", () => {
            displayCourseDetails(course);
        });
    }

    creditsDisplay.textContent = `${totalCredits}(${completedCredits})`;
}

const displayAllCourses = () => displayCourses(courses);
const displayWddCourses = () => displayCourses(wddCourses);
const displayCseCourses = () => displayCourses(cseCourses);

allButton.addEventListener("click", displayAllCourses);
wddButton.addEventListener("click", displayWddCourses);
cseButton.addEventListener("click", displayCseCourses);

fetchCourses();