const headerBuy = document.querySelector('.header__buy');
const modal = document.querySelector('.modal');


const modalControl = () => {
  const modalOpen = () => {
    modal.classList.add('is-visible');
  };

  const modalClose = () => {
    modal.classList.remove('is-visible');
  };

  headerBuy.addEventListener('click', modalOpen);

  modal.addEventListener('click', ({target}) => {
    if (target.classList.contains('close') || target === modal) {
      modalClose();
    }
  });
};

modalControl();