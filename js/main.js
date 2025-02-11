// Находим элементы
const btn = document.querySelector('#btn-mobile-nav');
//console.log(btn);

const mobileBtnImg = document.querySelector('#mobile-nav-img');

const mobileNav = document.querySelector('#mobile-nav');

const header = document.querySelector('#header');


// Добавляем прослушку по клику
btn.addEventListener('click', function() {
    //console.log('click');
    //console.log(mobileBtnImg);
    btn.classList.toggle('open');

    mobileNav.classList.toggle('open');

    header.classList.toggle('header-white-bg');

    document.body.classList.toggle('no-scroll');

    if (btn.classList.contains('open')) {
        mobileBtnImg.src = './img/icons/close-mobile-nav.svg';

    } else {
        mobileBtnImg.src = './img/icons/open-mobile-nav.svg';

    }
})