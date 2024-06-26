const box = document.querySelector(".container");
const images = document.querySelectorAll(".container img");
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let index = 0;

function slider() {
  index++;

  if (index > images.length - 1) {
    index = 0;
  }

  box.style.transform = `translateX(${-index * 1250}px)`;
}

setInterval(slider, 5000);

prevButton.addEventListener('click', () => {
  index = (index > 0) ? index - 1 : images.length - 1;
  box.style.transform = `translateX(${-index * 1250}px)`;
});

nextButton.addEventListener('click', () => {
  index = (index < images.length - 1) ? index + 1 : 0;
  box.style.transform = `translateX(${-index * 1250}px)`;
});
