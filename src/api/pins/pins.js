import apiService from '../apiService.js';
import { renderPins } from '../../js/pins.js';
import { setActiveBoard, updateDropdownActiveBoard } from '../../js/board.js';

export function fetchPins(boardId, searchValue = '') {
	const url = `pins?boardId=${boardId}`;

	apiService
		.get(url)
		.then(pins => {
			let filteredPins = pins;

			// Filter by title
			if (searchValue.trim()) {
				const lowerSearch = searchValue.toLowerCase();
				filteredPins = pins.filter(pin => pin.title && pin.title.toLowerCase().includes(lowerSearch));
			}

			renderPins(filteredPins);

			setActiveBoard(boardId);
			updateDropdownActiveBoard(boardId);
		})
		.catch(err => console.error('Fetch error:', err));
}

export async function addPinToBoard(pinData) {
	try {
		const newPin = await apiService.post('pins', pinData);
		return newPin;
	} catch (error) {
		console.error('Error adding pin:', error);
		throw error;
	}
}
