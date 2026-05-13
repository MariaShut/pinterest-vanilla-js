import '../styles/main.scss';
import { fetchPins } from '../api/pins/pins.js';
import { getActiveBoard } from './board.js';
import { initDropdown } from './dropdown.js';
import { initModal } from './modal.js';
import { initHandlers } from './handlers.js';

const selectBtn = document.querySelector('.header__select-btn');
const dropdown = document.querySelector('.dropdown');
const logoLink = document.querySelector('.header__logo-link');
const arrow = document.querySelector('.header__arrow');

const { closeDropdown } = initDropdown(selectBtn, dropdown, arrow);

initModal();

initHandlers(closeDropdown);
