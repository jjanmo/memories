const container = document.querySelector('.container');
const card = document.querySelector('.card');

container.addEventListener('mouseover', function (e) {
  e.stopPropagation();
});
card.addEventListener('mouseover', function (e) {
  e.stopPropagation();
});
