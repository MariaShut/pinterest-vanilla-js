import { loadBoard } from './board.js';
import { getActiveBoard } from './storage.js';
import { initDropdown } from './dropdown.js';

const selectBtn = document.querySelector('.header__select-btn');
const dropdown = document.querySelector('.dropdown');
const logoLink = document.querySelector('.header__logo-link');
const arrow = document.querySelector('.header__arrow');

const { closeDropdown } = initDropdown(selectBtn, dropdown, arrow);

// Choose board
dropdown.addEventListener('click', async event => {
	const item = event.target.closest('.dropdown__item');
	if (!item) return;
	await loadBoard(item.dataset.id);
	closeDropdown();
});

// Logo returns to feed
logoLink.addEventListener('click', async event => {
	event.preventDefault();
	await loadBoard('feed');
	closeDropdown();
});

document.addEventListener('DOMContentLoaded', async () => {
	const savedBoard = getActiveBoard();
	await loadBoard(savedBoard);
});
