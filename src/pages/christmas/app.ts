const container = document.querySelector('.container') as HTMLDivElement;
const card = document.querySelector('.card') as HTMLDivElement;

container.addEventListener('mouseover', function (e) {
  e.stopPropagation();
});
card.addEventListener('mouseover', function (e) {
  e.stopPropagation();
});
