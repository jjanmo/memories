const $hamberger = document.querySelector('.hamberger') as HTMLDivElement;
const $buttonContainer = document.querySelector('.button-container') as HTMLDivElement;
const $pictures = document.querySelectorAll('.picture') as NodeListOf<HTMLDivElement>;

const handleClickHamberger = () => {
  const $wrapper = document.querySelector('.wrapper') as HTMLDivElement;
  $wrapper.classList.toggle('clicked');
};

const handleClickButton = (e: MouseEvent) => {
  const className = (e.target as HTMLDivElement).className;
  if (className.includes('captain')) {
    const $captainPicture = document.querySelector('.captain-picture') as HTMLDivElement;
    $captainPicture.classList.add('show');
  } else if (className.includes('ironman')) {
    const $ironmanPicture = document.querySelector('.ironman-picture') as HTMLDivElement;
    $ironmanPicture.classList.add('show');
  }
};

const handleClickPicture = (e: MouseEvent) => {
  const target = (e.target as HTMLDivElement).parentNode as HTMLDivElement;
  target.classList.remove('show');
};

function init() {
  $hamberger.addEventListener('click', handleClickHamberger);
  $buttonContainer.addEventListener('click', handleClickButton);
  $pictures.forEach(($picture) => $picture.addEventListener('click', handleClickPicture));
}

init();
