const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((trending_movies, i) => {
    if (i === index) {
      trending_movies.style.display = 'block';
    } else {
      trending_movies.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);

setInterval(nextSlide, 2000);//2 second
