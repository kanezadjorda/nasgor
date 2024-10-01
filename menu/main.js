const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('nasgor-btn');
const nextBtn = document.getElementById('mie-btn');

let currentIndex = 0;
const totalItems = document.querySelectorAll('.menu').length;

function updateCarousel() {
  const offset = -currentIndex * 1400; // Assuming each card is 300px wide
  carousel.style.transform = `translateX(${offset}px)`;

  // Disable buttons based on the current index
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === totalItems - 1;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
    updateCarousel();
  }
});

// Initial update
updateCarousel();

function cardsButton() {}
