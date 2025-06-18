const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.side-menu');

/**
 * 햄버거 메뉴 이벤트 핸들러
 * 
 * @returns {void}
*/
function handleHamburgerMenu(){
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
}

handleHamburgerMenu();

