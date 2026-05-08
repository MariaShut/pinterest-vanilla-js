export function getActiveBoard() {
	return localStorage.getItem('activeBoard') || 'feed';
}

export function setActiveBoard(boardId) {
	localStorage.setItem('activeBoard', boardId);
}
