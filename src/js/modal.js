import { addPinToBoard } from '../api/pins/pins.js';

let currentPin = null;
let allBoards = [];

// Modal elements
const modal = document.getElementById('board-modal');
const modalOverlay = document.querySelector('.modal__overlay');
const closeButton = document.querySelector('.modal__close');
const boardsList = document.getElementById('modal-boards-list');
const searchInput = document.querySelector('.modal__search-input');

// Get boards from dropdown
function getBoardsFromHeader() {
	const items = document.querySelectorAll('.dropdown__item');
	const boards = [];

	items.forEach(item => {
		const id = item.dataset.id;
		const name = item.textContent.trim();
		const iconImg = item.querySelector('.dropdown__icon');
		const icon = iconImg ? iconImg.src : '';

		if (id && name) {
			boards.push({ id, name, icon });
		}
	});

	return boards;
}

function displayBoards(boards) {
	boardsList.innerHTML = '';

	if (boards.length === 0) {
		boardsList.innerHTML = '<div class="modal__empty">No boards found</div>';
		return;
	}

	boards.forEach(board => {
		const boardItem = document.createElement('li');
		boardItem.className = 'modal__board-item';
		boardItem.dataset.id = board.id;

		// board icon

		const img = document.createElement('img');
		img.className = 'modal__board-item-icon';
		img.src = board.icon;
		img.alt = board.name;

		// text container

		const textContainer = document.createElement('div');
		textContainer.className = 'modal__board-item-text';

		// board title

		const nameSpan = document.createElement('span');
		nameSpan.className = 'modal__board-item-name';
		nameSpan.textContent = board.name;

		// board items

		const countSpan = document.createElement('span');
		countSpan.className = 'modal__board-item-count';
		if (board.id === 'journaling') {
			countSpan.textContent = '15 items';
		} else if (board.id === 'art') {
			countSpan.textContent = '10 items';
		} else if (board.id === 'ceramics') {
			countSpan.textContent = '21 items';
		} else {
			countSpan.textContent = '0 items';
		}

		// append text block
		textContainer.appendChild(nameSpan);
		textContainer.appendChild(countSpan);

		boardItem.appendChild(img);
		boardItem.appendChild(textContainer);

		boardsList.appendChild(boardItem);
	});
}

// Filter
function filterBoards() {
	const searchText = searchInput.value.toLowerCase();
	const filtered = allBoards.filter(board => board.name.toLowerCase().includes(searchText));
	displayBoards(filtered);
}

function onBoardClick(event) {
	// get li
	const boardItem = event.target.closest('.modal__board-item');
	if (!boardItem) return;

	const boardId = boardItem.dataset.id;
	if (!boardId || !currentPin) return;

	// Send a request to add a pin
	addPinToBoard({
		boardId: boardId,
		title: currentPin.title,
		image: currentPin.image,
	})
		.then(() => {
			closeModal();
			console.log('Пин добавлен');
		})
		.catch(error => {
			console.error('Ошибка:', error);
			alert('Не удалось добавить пин');
		});
}

// To open
function openModal(pinData) {
	currentPin = pinData;
	allBoards = getBoardsFromHeader();
	displayBoards(allBoards);

	searchInput.value = '';
	modal.classList.add('modal_active');
}

// To close
function closeModal() {
	modal.classList.remove('modal_active');
	currentPin = null;
}

function setupEventListeners() {
	closeButton.addEventListener('click', closeModal);
	modalOverlay.addEventListener('click', closeModal);
	searchInput.addEventListener('input', filterBoards);
	boardsList.addEventListener('click', onBoardClick);

	// Esc close
	document.addEventListener('keydown', event => {
		if (event.key === 'Escape' && modal.classList.contains('modal_active')) {
			closeModal();
		}
	});
}

export function initModal() {
	setupEventListeners();
}

export { openModal };
