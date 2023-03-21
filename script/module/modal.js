const headerBuy = document.querySelector('.header__buy');
const formOverlay = document.querySelector('.form__overlay');
const menuBtn = document.querySelector('.menu');
const menu = document.querySelector('.dropdown__menu');
const modalBtn = menu.querySelector('.modal__btn');
const menuItems = menu.querySelectorAll('.dropdown__menu-list>li')

const menuControl = () => {
  const menuOpen = () => {
    menu.classList.add('is-visible');
    menuBtn.classList.add('is-active');
  };

  const menuClose = () => {
    menu.classList.remove('is-visible');
    menuBtn.classList.remove('is-active');
  };

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.contains('is-active') ?
      menuClose() : menuOpen();
  });

  menu.addEventListener('click', ({target}) => {
    if (target === menu || target.closest('li') ) {
      menuClose();
    }
  });
  
};

const modalControl = () => {
  const modalOpen = () => {
    formOverlay.classList.add('is-visible');
    if (menuBtn.classList.contains('is-active')) {
      menu.classList.remove('is-visible');
      menuBtn.classList.remove('is-active');
    }
  };

  const modalClose = () => {
    formOverlay.classList.remove('is-visible');
  };

  headerBuy.addEventListener('click', modalOpen);
  modalBtn.addEventListener('click', () => {
    modalOpen();
  });

  formOverlay.addEventListener('click', ({target}) => {
    if (target.classList.contains('close') || target === formOverlay) {
      modalClose();
    }
  });
};



modalControl();
menuControl();