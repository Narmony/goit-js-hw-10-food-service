import dishes from "../menu.json";
import dishesCardTpl from '../templates/dishes-card.hbs';

const menuRef = document.querySelector('.js-menu');
const markup = dishesCardTpl(dishes);
menuRef.insertAdjacentHTML('beforeend', markup);

