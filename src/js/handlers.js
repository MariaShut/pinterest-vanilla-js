import { fetchPins } from '../api/pins/pins.js';
import { getActiveBoard } from './board.js';

export function initHandlers(closeDropdown) {
	const dropdown = document.querySelector('.dropdown');
	const logoLink = document.querySelector('.header__logo-link');

	// Choose board
	dropdown.addEventListener('click', async event => {
		const item = event.target.closest('.dropdown__item');
		if (!item) return;
		fetchPins(item.dataset.id);
		closeDropdown();
	});

	// Logo returns to feed
	logoLink.addEventListener('click', async event => {
		event.preventDefault();
		fetchPins('feed');
		closeDropdown();
	});

	document.addEventListener('DOMContentLoaded', async () => {
		const savedBoard = getActiveBoard();
		fetchPins(savedBoard);
	});
}
