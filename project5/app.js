const $hamberger = document.querySelector('.hamberger');
const $buttonContainer = document.querySelector('.button-container');
const $pictures = document.querySelectorAll('.picture');

const handleClickHamberger = () => {
  const $wrapper = document.querySelector('.wrapper');
  $wrapper.classList.toggle('clicked');
};

const handleClickButton = (e) => {
  const className = e.target.className;
  if (className.includes('captain')) {
    const $captainPicture = document.querySelector('.captain-picture');
    $captainPicture.classList.add('show');
  } else if (className.includes('ironman')) {
    const $ironmanPicture = document.querySelector('.ironman-picture');
    $ironmanPicture.classList.add('show');
  }
};

const handleClickPicture = (e) => {
  const target = e.target.parentNode;
  console.log(target);
  target.classList.remove('show');
};

function init() {
  $hamberger.addEventListener('click', handleClickHamberger);
  $buttonContainer.addEventListener('click', handleClickButton);
  $pictures.forEach(($picture) =>
    $picture.addEventListener('click', handleClickPicture)
  );
}

init();
