import { fetchPins } from '../api/pins/pins.js';
import { getActiveBoard } from './board.js';

export function initHandlers(closeDropdown) {
	const dropdown = document.querySelector('.dropdown');
	const logoLink = document.querySelector('.header__logo-link');
	const searchInput = document.querySelector('.header__search-input');

	// Switch board & clear header search
	dropdown.addEventListener('click', async event => {
		const item = event.target.closest('.dropdown__item');
		if (!item) return;

		searchInput.value = '';
		fetchPins(item.dataset.id);
		closeDropdown();
	});

	// Logo returns to main feed & clear search
	logoLink.addEventListener('click', async event => {
		event.preventDefault();
		searchInput.value = '';
		fetchPins('feed');
		closeDropdown();
	});

	// Filter pins on input change
	searchInput.addEventListener('input', () => {
		const searchValue = searchInput.value;
		const currentBoard = getActiveBoard();

		fetchPins(currentBoard, searchValue);
	});

	document.addEventListener('DOMContentLoaded', async () => {
		const savedBoard = getActiveBoard();
		fetchPins(savedBoard);
	});
}
