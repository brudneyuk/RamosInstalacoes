let index = 0;
const slides = document.querySelectorAll('.slide', '.slide active');
const anterior = document.querySelector('.anterior');
const proximo = document.querySelector('.proximo');

function mostrarSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[i].classList.add('active');
}

function proximoSlide() {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
}

function slideAnterior() {
  index = (index - 1 + slides.length) % slides.length;
  mostrarSlide(index);
}

proximo.addEventListener('click', proximoSlide);
anterior.addEventListener('click', slideAnterior);

// Troca automática a cada 5s
setInterval(proximoSlide, 5000);

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
});

