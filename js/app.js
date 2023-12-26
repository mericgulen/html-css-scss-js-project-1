
const navMenu = document.querySelector('#nav__menu');
const btnContainer = document.querySelector('.nav__toggle');

btnContainer.addEventListener('click', () => {
  navMenu.classList.toggle('clicked');
})

//* set currenttear

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;