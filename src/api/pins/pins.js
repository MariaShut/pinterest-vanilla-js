import apiService from '../apiService.js';
import { renderPins } from '../../js/pins.js';
import { setActiveBoard, updateDropdownActiveBoard } from '../../js/board.js';

export function fetchPins(boardId) {
	apiService
		.get(`pins?boardId=${boardId}`)
		.then(pins => {
			renderPins(pins);
			setActiveBoard(boardId);
			updateDropdownActiveBoard(boardId);
		})
		.catch(err => console.log(err));
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
