document.addEventListener('DOMContentLoaded', function () {
  const titleElement = document.querySelector('.welcome__title');
  titleElement.classList.add('welcome__title--active');
});

const allCharacters = document.querySelector('.all-characters');
const buttonOpen = document.querySelector('.welcome__button');

const buttonToggle = () => {
  allCharacters.classList.add('all-characters--active');
};

buttonOpen.addEventListener('click', buttonToggle);

updateOverflow();
