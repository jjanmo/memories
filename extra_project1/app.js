const container = document.querySelector('.container');
const card = document.querySelector('.card');

container.addEventListener('mouseover', function (e) {
    e.stopPropagation();
    console.log("container");
})
card.addEventListener('mouseover', function (e) {
    e.stopPropagation();
    console.log("card");
})