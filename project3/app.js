const aboutButtons = document.querySelectorAll('.about-button');
const titleElem = document.querySelector('.title');

const handleClickAboutBtn = (e) => {
  const targetId = e.target.dataset.target; // about p element id
  const aboutElem = document.querySelector(`#${targetId}`); // about p element
  const imageElem = e.target.parentNode.children[0]; // card image

  aboutElem.classList.toggle('show');
  imageElem.classList.toggle('darken');
};

function init() {
  aboutButtons.forEach((button) =>
    button.addEventListener('click', handleClickAboutBtn)
  );
}

init();

const titleTexts = [
  '2022년 6월 29일 수요일 밤 9시 첫방송, 본방사수',
  '조금 이상한 변호사 우영우의 대형 로펌 생존기',
  '똑바로 읽어도 거꾸로 읽어도 우영우입니다',
  '법무법인 한바다의 팀을 소개합니다',
];

const text = '2022년 6월 29일 수요일 밤 9시 첫방송, 본방사수';

let index = 0;
let id;

const getRandomTitle = () => {
  return titleTexts[Math.floor(Math.random() * 4)];
};

const renderTitle = () => {
  if (titleElem.textContent.length < text.length) {
    titleElem.textContent += text.charAt(index);
    index++;

    setTimeout(renderTitle, 100);
  }
};

renderTitle();
