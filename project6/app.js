const leftBtn = document.querySelector('.arrow-left');
const rightBtn = document.querySelector('.arrow-right');
const playBtn = document.querySelector('.play-pause');
const cubes = document.querySelectorAll('.cube');

let deg = 0;
let isPlaying = false;
let intervalId;
let iconElem;

const stopPlaying = (isPlaying) => {
  if (isPlaying) {
    isPlaying = false;
    iconElem.className = 'fas fa-play';
    clearInterval(intervalId);
  }
};
const transformCubes = (deg) => {
  cubes.forEach((cube) => (cube.style.transform = `rotateY(${deg}deg)`));
};

const handleClickLeftBtn = () => {
  stopPlaying(isPlaying);
  deg -= 90;
  transformCubes(deg);
};
const handleClickRightBtn = () => {
  stopPlaying(isPlaying);
  deg += 90;
  transformCubes(deg);
};

const handleMouseoverLeftBtn = () => {
  deg -= 25;
  transformCubes(deg);
};
const handleMouseoverRightBtn = () => {
  deg += 25;
  transformCubes(deg);
};
const handleMouseoutLeftBtn = () => {
  deg += 25;
  transformCubes(deg);
};
const handleMouseoutRightBtn = () => {
  deg -= 25;
  transformCubes(deg);
};

const handleClickPlayBtn = (e) => {
  if (iconElem.className.includes('play')) {
    isPlaying = true;
    iconElem.className = 'fas fa-pause';
    transformInterval();
  } else {
    stopPlaying(isPlaying);
  }
};

const transformInterval = () => {
  intervalId = setInterval(() => {
    deg += 90;
    transformCubes(deg);
  }, 2500);
};

function init() {
  leftBtn.addEventListener('click', handleClickLeftBtn);
  rightBtn.addEventListener('click', handleClickRightBtn);
  leftBtn.addEventListener('mouseover', handleMouseoverLeftBtn);
  rightBtn.addEventListener('mouseover', handleMouseoverRightBtn);
  leftBtn.addEventListener('mouseout', handleMouseoutLeftBtn);
  rightBtn.addEventListener('mouseout', handleMouseoutRightBtn);

  playBtn.addEventListener('click', handleClickPlayBtn);

  iconElem = playBtn.querySelector('.fas');
}

init();
