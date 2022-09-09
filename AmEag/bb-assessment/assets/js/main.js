const hamburger = document.querySelector(".hamburger");
const navbar__menu = document.querySelector(".navbar__menu");
const close = document.querySelector(".close");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar__menu.classList.toggle("active");
})
close.addEventListener("click", () => {
    navbar__menu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbar__menu.classList.remove("active");
}))

const track = document.querySelector(".track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".rectangle-right");
const prevButton = document.querySelector(".rectangle-left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);
console.log(slides);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);


nextButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;

    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
})