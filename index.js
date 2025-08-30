

    const toggleBtn = document.getElementById("menu-toggle");
    const nav = document.querySelector(".navbaar ul");

    toggleBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

const slider = document.getElementById('testimonialSlider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const totalSlides = slider.children.length;

function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlider();
});



  