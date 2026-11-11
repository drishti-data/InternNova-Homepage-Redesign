
// 1. Welcome message
window.addEventListener("load", function () {
    console.log("Welcome to InternNova!");
});


// 2. Internship Program Search
const searchInput = document.getElementById("programSearch");
const searchButton = document.getElementById("searchBtn");
const programCards = document.querySelectorAll("#programList .program-card");
const searchMessage = document.getElementById("searchMessage");

function searchPrograms() {
    const searchText = searchInput.value.toLowerCase().trim();
    let found = 0;

    programCards.forEach(function (card) {
        const programName = card.textContent.toLowerCase();

        if (programName.includes(searchText)) {
            card.style.display = "block";
            found++;
        } else {
            card.style.display = "none";
        }
    });

    if (found === 0) {
        searchMessage.textContent = "No programs found. Try another search.";
    } else {
        searchMessage.textContent = found + " program(s) found.";
    }
}

searchButton.addEventListener("click", searchPrograms);

searchInput.addEventListener("input", searchPrograms);


// 3. FAQ Accordion
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const faqItem = button.parentElement;
        faqItem.classList.toggle("active");

        const symbol = button.querySelector("span");

        if (faqItem.classList.contains("active")) {
            symbol.textContent = "-";
        } else {
            symbol.textContent = "+";
        }
    });
});


// 4. Application Form Validation
const applicationForm = document.getElementById("applicationForm");
const formMessage = document.getElementById("formMessage");

applicationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const email = document.getElementById("studentEmail").value.trim();
    const domain = document.getElementById("studentDomain").value;

    if (name === "" || email === "" || domain === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill in all the fields.";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent =
        "Thank you, " + name + "! Your demo application was submitted successfully.";

    applicationForm.reset();
});


// 5. Navigation Click Events
const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("Navigation clicked: " + link.textContent);
    });
});


// 6. Program Card Hover Events
programCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        card.style.borderColor = "#2563eb";
    });

    card.addEventListener("mouseleave", function () {
        card.style.borderColor = "#e2e8f0";
    });
});
