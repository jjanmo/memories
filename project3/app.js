const aboutButtons = document.querySelectorAll('.about-button');
const titleElem = document.querySelector('.title');
const bgButtons = document.querySelectorAll('.bg-button');

const titleTexts = [
  '2022년 6월 29일 수요일 밤 9시 첫방송! 본방사수',
  '이상한 변호사 우영우의 대형 로펌 생존기',
  '똑바로 읽어도 거꾸로 읽어도 우영우입니다',
];
let index = 0;

const handleClickAboutBtn = (e) => {
  const targetId = e.target.dataset.target; // about p element id
  const aboutElem = document.querySelector(`#${targetId}`); // about p element
  const imageElem = e.target.parentNode.children[0]; // card image

  aboutElem.classList.toggle('show');
  imageElem.classList.toggle('darken');
};

const getRandomTitle = () => {
  return titleTexts[Math.floor(Math.random() * 3)];
};

const resetTitle = () => {
  titleElem.textContent = '';
  index = 0;

  renderTitle(getRandomTitle());
};

const renderTitle = (title) => {
  if (titleElem.textContent.length < title.length) {
    titleElem.textContent += title.charAt(index);
    index++;
    setTimeout(() => {
      renderTitle(title);
    }, 100);
  } else {
    setTimeout(resetTitle, 3500);
  }
};

const handleClickBgBtn = (e) => {
  const bgId = e.target.id;
  const contaienr = document.querySelector('.container');
  contaienr.style.backgroundImage = `url(../assets/p3/${bgId}.png)`;
};

function init() {
  aboutButtons.forEach((button) =>
    button.addEventListener('click', handleClickAboutBtn)
  );
  bgButtons.forEach((button) =>
    button.addEventListener('click', handleClickBgBtn)
  );

  renderTitle(getRandomTitle());
}

init();
