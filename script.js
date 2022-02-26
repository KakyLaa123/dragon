const cards = document.querySelectorAll('.cards-list__card');
const cardFilterBlock = document.querySelectorAll('.cards__btn');
const cardGoods = document.getElementById('cards__goods');
const cardNews = document.getElementById('cards__news');
const cardList = document.querySelector('.main__cards-list');
const openMenuBtn = document.querySelector('.top-header_menu-header');
const modalMenu = document.querySelector('.modal-menu');
const closeMenuBtn = document.querySelector('.head__btn');
const bottomSlider = document.querySelectorAll('.review-cards__card-review');
const bottomSliderName = document.querySelectorAll('.name-score__name');
const bottomSliderPrev = document.querySelector('.change-btns__prev');
const bottomSliderNext = document.querySelector('.change-btns__next');
const mainSlider = document.querySelectorAll('.slide__aside');
const mainSliderPrev = document.querySelector('.change__prev-slide');
const mainSliderNext = document.querySelector('.change__next-slide');
const mainSliderGrade = document.querySelectorAll('.num__slider-point');
const catalogBtn = document.querySelector('.btn__catalog');
const catalogBtnClosed = document.querySelectorAll('.catalog__img__closed');
const catalogBtnOpened = document.querySelectorAll('.catalog__img__opened');
const catalogArea = document.querySelector('.catalog-box');



cardsStatus();
cardFilter();
menu();
BottomSliderChange();
if(window.innerWidth < 1200){
    textLimit();
}
mainSliderChange();
catalogFunction();

function catalogFunction(){

    let i = 1;

    catalogBtn.addEventListener('click', () => {
        if(i % 2 != 0){
            catalogArea.classList.remove('hidden');
            i++;
            catalogBtnClosed.forEach(elem => {
                elem.classList.add('hidden');
            });
            catalogBtnOpened.forEach(elem => {
                elem.classList.remove('hidden');
            });
        }else{
            catalogArea.classList.add('hidden');
            i++;
            catalogBtnOpened.forEach(elem => {
                elem.classList.add('hidden');
            });
            catalogBtnClosed.forEach(elem => {
                elem.classList.remove('hidden');
            });
        }
    });
}

function mainSliderChange(){
    let i = 0;

    mainSliderNext.addEventListener('click', () => {
        i++;
        mainSlider[i].scrollIntoView({behavior: "smooth", inline: "center", block: "nearest"});
        mainSliderGrade.forEach(elem => {
            elem.classList.remove('num__slider-point__selected');
        });
        mainSliderGrade[i * 2].classList.add('num__slider-point__selected');
        mainSliderGrade[(i * 2) + 1].classList.add('num__slider-point__selected');
        if(i >= 1){
            mainSliderPrev.disabled = false;
        }
        if(i >= mainSlider.length - 1){
            mainSliderNext.disabled = true;
        }
    });
    
    mainSliderPrev.addEventListener('click', () => {
        i--;
        mainSlider[i].scrollIntoView({behavior: "smooth", inline: "center", block: "nearest"});
        mainSliderGrade.forEach(elem => {
            elem.classList.remove('num__slider-point__selected');
        });
        if(i != 0){
            mainSliderGrade[i * 2].classList.add('num__slider-point__selected');
            mainSliderGrade[(i * 2) + 1].classList.add('num__slider-point__selected');
        }else{
            mainSliderGrade[i].classList.add('num__slider-point__selected');
            mainSliderGrade[i + 1].classList.add('num__slider-point__selected');
        }
        if(i < 1){
            mainSliderPrev.disabled = true;
        }
        if(i < mainSlider.length - 1){
            mainSliderNext.disabled = false;
        }
    });
}

function textLimit(){
    bottomSliderName.forEach(elem => {
        let elementTrim = elem.textContent.trim();
        elem.textContent = elementTrim.slice(0, 30) + '...';
        console.log(elementTrim.slice(0, 30));
    });
}

function BottomSliderChange(){
    let i = 1;

    bottomSliderNext.addEventListener('click', () => {
        i++;
        bottomSlider[i].scrollIntoView({behavior: "smooth", inline: "center", block: "nearest"});
        if(i >= 2){
            bottomSliderPrev.disabled = false;
        }
        if(i >= bottomSlider.length - 2){
            bottomSliderNext.disabled = true;
        }
    });
    
    bottomSliderPrev.addEventListener('click', () => {
        i--;
        bottomSlider[i].scrollIntoView({behavior: "smooth", inline: "center", block: "nearest"});
        if(i < 2){
            bottomSliderPrev.disabled = true;
        }
        if(i < bottomSlider.length - 2){
            bottomSliderNext.disabled = false;
        }
    });
}

function menu(){
    openMenuBtn.addEventListener('click', () => {
        modalMenu.classList.remove('hidden');
    });

    closeMenuBtn.addEventListener('click', () => {
        modalMenu.classList.add('hidden');
    });
}

function cardFilter(){
    cardGoods.addEventListener('change', () => {
        if(cardGoods.checked){
            cards.forEach(elem => {
                elem.classList.remove('hidden');
            });
            cardFilterBlock[0].classList.add('cards__btn__selected');
            cardFilterBlock[1].classList.remove('cards__btn__selected');
        }
    });

    cardNews.addEventListener('change', () => {
        if(cardNews.checked){
            cards.forEach(elem => {
                if(!elem.classList.contains('main__cards-list__new')){
                    elem.classList.add('hidden');
                }
            });
            cardFilterBlock[1].classList.add('cards__btn__selected');
            cardFilterBlock[0].classList.remove('cards__btn__selected');
        }
    });
}

function cardsStatus(){
    cards.forEach(elem => {
        let statusList = document.createElement('ul');
        statusList.classList.add('card__status');
        let statusLimited = document.createElement('li');
        statusLimited.classList.add('status__limited');
        statusLimited.textContent = 'Ограничения по доставке';
        let statusNew = document.createElement('li');
        statusNew.classList.add('status__new');
        statusNew.textContent = 'New!';
        let statusSale = document.createElement('li');
        statusSale.classList.add('status__sale');
        statusSale.textContent = 'Sale!';
        if(elem.classList.contains('main__cards-list__limited') && elem.classList.contains('main__cards-list__new') &&
           elem.classList.contains('main__cards-list__sale')){
            statusList.appendChild(statusLimited);
            statusList.appendChild(statusNew);
            statusList.appendChild(statusSale);
        }
        if(elem.classList.contains('main__cards-list__limited') && elem.classList.contains('main__cards-list__sale')){
            statusList.appendChild(statusLimited);
            statusList.appendChild(statusSale);
        }
        if(elem.classList.contains('main__cards-list__limited') && elem.classList.contains('main__cards-list__new')){
            statusList.appendChild(statusLimited);
            statusList.appendChild(statusNew);
        }
        if(elem.classList.contains('main__cards-list__new') && elem.classList.contains('main__cards-list__sale')){
            statusList.appendChild(statusNew);
            statusList.appendChild(statusSale);
        }
        if(elem.classList.contains('main__cards-list__limited')){
            statusList.appendChild(statusLimited);
        }
        if(elem.classList.contains('main__cards-list__new')){
            statusList.appendChild(statusNew);
        }
        if(elem.classList.contains('main__cards-list__sale')){
            statusList.appendChild(statusSale);
        }
        elem.appendChild(statusList);
    });
}
