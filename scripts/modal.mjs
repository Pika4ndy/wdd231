const closeDialog = document.getElementById("close-dialog");
const courseModal = document.getElementById("course-dialog");

const courseName = document.getElementById("courseName");
const courseTitle = document.getElementById("courseTitle");
const courseCredits = document.getElementById("dialogTotalCredits");
const courseCertificate = document.getElementById("dialogCertificate");
const courseDescription = document.getElementById("dialogDescription");
const courseTechnology = document.getElementById("dialogTechnology");

closeDialog.addEventListener("click", () => {
    courseModal.close();
});

function displayCourseDetails(course) {
    courseName.textContent = `${course.subject} ${course.number}`;
    courseTitle.textContent = course.title;

    if (course.completed) {
        courseTitle.classList.add("completed");
    } else {
        courseTitle.classList.remove("completed");
    }

    courseCredits.textContent = course.credits;
    courseCertificate.textContent = course.certificate;
    courseDescription.textContent = course.description;

    courseTechnology.textContent = course.technology.join(", ");

    courseModal.showModal();
}

while (courseModal.isOpen) {
    
}

export {displayCourseDetails};