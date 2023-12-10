(function () {
  const aboutButtons = document.querySelectorAll('.about-button') as NodeListOf<HTMLButtonElement>;
  const titleElem = document.querySelector('.title') as HTMLHeadingElement;
  const bgButtons = document.querySelectorAll('.bg-button') as NodeListOf<HTMLButtonElement>;

  const titleTexts = [
    '2022년 6월 29일 수요일 밤 9시 첫방송! 본방사수',
    '이상한 변호사 우영우의 대형 로펌 생존기',
    '똑바로 읽어도 거꾸로 읽어도 우영우입니다',
  ];
  let index = 0;

  const handleClickAboutBtn = (e: MouseEvent) => {
    const buttonElem = e.target as HTMLButtonElement;
    const targetId = buttonElem.dataset.target;
    const aboutElem = document.querySelector(`#${targetId}`) as HTMLParagraphElement;
    const imageElem = (buttonElem.parentNode as HTMLImageElement).children[0];

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

  const renderTitle = (title: string) => {
    if (titleElem.textContent!.length < title.length) {
      titleElem.textContent += title.charAt(index);
      index++;
      setTimeout(() => {
        renderTitle(title);
      }, 100);
    } else {
      setTimeout(resetTitle, 3500);
    }
  };

  const handleClickBgBtn = () => {
    const container = document.querySelector('.container') as HTMLDivElement;
    container.classList.toggle('bg1');
    container.classList.toggle('bg2');
  };

  function init() {
    aboutButtons.forEach((button) => button.addEventListener('click', handleClickAboutBtn));
    bgButtons.forEach((button) => button.addEventListener('click', handleClickBgBtn));

    renderTitle(getRandomTitle());
  }

  init();
})();
