import { getFromStorage, saveToStorage } from './storage.js';

export function getActiveBoard() {
	return getFromStorage('activeBoard') || 'feed';
}

export function setActiveBoard(boardId) {
	saveToStorage('activeBoard', boardId);
}

// for checkmark icon
export function updateDropdownActiveBoard(boardId) {
	const items = document.querySelectorAll('.dropdown__item');

	items.forEach(item => {
		if (boardId && item.dataset.id === boardId) {
			item.classList.add('dropdown__item_active');
		} else {
			item.classList.remove('dropdown__item_active');
		}
	});
}
