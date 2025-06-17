

const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.side-menu');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});
