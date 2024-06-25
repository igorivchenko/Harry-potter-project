document.addEventListener('DOMContentLoaded', function () {
  const titleElement = document.querySelector('.hero__title');
  titleElement.classList.add('hero__title--active');
});

const btnOpen = document.querySelector('.hero__volume');
const audioClose = document.querySelector('.hero__volume-close');
const audio = document.querySelector('.hero__audio');

let firstClick = true;

const audioToggle = () => {
  if (firstClick) {
    audio.play();
    firstClick = false;
  } else {
    if (audio.paused) {
      audio.play();
      audioClose.classList.remove('hero__volume-close--active');
    } else {
      audio.pause();
      audioClose.classList.add('hero__volume-close--active');
    }
  }
};

btnOpen.addEventListener('click', audioToggle);
