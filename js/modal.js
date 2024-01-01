const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');
const body = document.body;

const toggleModal = () => {
  modal.classList.toggle('is-hidden');
  body.classList.toggle('no-scroll');
};

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);