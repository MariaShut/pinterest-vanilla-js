import { fetchPins } from './api.js';
import { renderPins } from './render.js';
import { setActiveBoard, getActiveBoard } from './storage.js';

// for checkmark icon
function updateDropdownActiveBoard(boardId) {
	const items = document.querySelectorAll('.dropdown__item');

	items.forEach(item => {
		if (boardId && item.dataset.id === boardId) {
			item.classList.add('dropdown__item_active');
		} else {
			item.classList.remove('dropdown__item_active');
		}
	});
}

export async function loadBoard(boardId) {
	const pins = await fetchPins(boardId);

	renderPins(pins);
	setActiveBoard(boardId);
	updateDropdownActiveBoard(boardId);
}
