const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

let currentIndex = 0;

// image slide function
function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove('slideActive');
    slide.style.opacity = '0';
  });
  slides[index].classList.add('slideActive');
  slides[index].style.opacity = '1';
}


showSlide(currentIndex);

// Next button
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Prev button
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});


setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 4000);