alert("Welcome to Edu-Chain")
// Ready for future interactions
console.log("EduChain UI Loaded");

const section = document.querySelector(".learning-content");

window.addEventListener("scroll", () => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 150) {
        section.classList.add("show");
    }
});
const coursesSection = document.querySelector(".featured-courses");

window.addEventListener("scroll", () => {
    const top = coursesSection.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (top < screen - 150) {
        coursesSection.classList.add("show");
    }
});
const openBtn = document.getElementById("openVideo");
const modal = document.getElementById("videoModal");
const closeBtn = document.getElementById("closeVideo");
const video = document.getElementById("introVideo");

openBtn.addEventListener("click", () => {
    modal.classList.add("active");
    video.play();
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    video.pause();
    video.currentTime = 0;
});

// Close when clicking outside video
modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("video-overlay")) {
        modal.classList.remove("active");
        video.pause();
        video.currentTime = 0;
    }
});
// Navbar scroll effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

