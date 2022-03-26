const banner = document.getElementById('banner-container');
const form = document.getElementById('js-form-container');
const bannerBtn = document.getElementById('js-banner-button');


function handleShowForm() {
    form.classList.remove('hidden');
    banner.classList.add('hidden')
}


function init() {
    bannerBtn.addEventListener('click', handleShowForm);
}

init();