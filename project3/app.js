const aboutButtons = document.querySelectorAll('.about-button');

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
