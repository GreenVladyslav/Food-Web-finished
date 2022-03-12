require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';


import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-02-28');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',

    });


});













// отчистка модального окна
// const formInput = form.querySelectorAll('input');
// formInput.forEach(item => {
//     item.value = ' ';
// });



// tabs
// 1. скрываем весь контент который есть в табах
// 2. убираем класс активонсти у всех табах

// 3.показывает нам табы и добавляем класс актив

// 4.изспользуем оброботчик событий , передаю событие , проверяют таргет и таргет класс 
// табхедер итем.
// 5. мы перебем все табы ( итем и - номер элемента по породяку)
// елси таргет равен элементу который мы перебераем то вызыва дву функциию и передаем И. 


// Добавили в css классы



// fetch запрос
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({name: 'Alex'}),
//     headers: {
//         'Content-type': 'application/json'
//     }
// })
// .then(response => response.json())
// .then(json => console.log(json));



// функциона оп общению с сервером
// fetch('http://localhost:3000/menu')
// .then(data => data.json())
// .then(res => console.log(res));

// классический перебор обьекта в обьект
// const object = {};
//             formData.forEach(function(value, key) {
//                 object[key] = value;
//             });


// easy slider
    // showSlides(slideIndex);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');

    //     slides[slideIndex -1].style.display = 'block';

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // sliderPrev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });

    // sliderNext.addEventListener('click', () => {
    //     plusSlides(1);
    // });