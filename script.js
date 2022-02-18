const cards = document.querySelectorAll('.cards-list__card');
const cardFilterBlock = document.querySelectorAll('.cards__btn');
const cardGoods = document.getElementById('cards__goods');
const cardNews = document.getElementById('cards__news');
const cardList = document.querySelector('.main__cards-list');
const openMenuBtn = document.querySelector('.top-header_menu-header');
const modalMenu = document.querySelector('.modal-menu');
const closeMenuBtn = document.querySelector('.head__btn');



cardsStatus();
cardFilter();
menu();

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
            cardList.classList.remove('justify-content');
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
            cardList.classList.add('justify-content');
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
