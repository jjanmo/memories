const $hamberger = document.querySelector('.hamberger');

const handleClickHamberger = (e) => {
  const $wrapper = document.querySelector('.wrapper');
  $wrapper.classList.toggle('clicked');
};

function init() {
  $hamberger.addEventListener('click', handleClickHamberger);
}

init();
