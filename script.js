
// Show a welcome message when the website opens
window.addEventListener("load", function () {
    console.log("Welcome to InternNova!");
});

// Smooth navigation when clicking menu links
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("Navigation clicked: " + link.textContent);
    });
});

// Apply Now button interaction
const applyButtons = document.querySelectorAll(
    ".nav-button, .cta .primary-btn"
);

applyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        console.log("User clicked Apply Now");
    });
});

// Explore Programs button interaction
const exploreButton = document.querySelector(
    ".hero .primary-btn"
);

exploreButton.addEventListener("click", function () {
    console.log("User is exploring internship programs");
});

// Program card hover interaction
const programCards = document.querySelectorAll(".program-card");

programCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        card.style.borderColor = "#2563eb";
    });

    card.addEventListener("mouseleave", function () {
        card.style.borderColor = "transparent";
    });
});
