'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnOpen = document.querySelectorAll('.show-modal');
console.log(btnOpen);

const openModel = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}

const closeModel = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnOpen.length; i++) {
    btnOpen[i].addEventListener('click', openModel);
}



btnClose.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
    console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {

        closeModel();

    }

});



