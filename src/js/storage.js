export function getFromStorage(key) {
	const data = localStorage.getItem(key);
	return data ? JSON.parse(data) : null;
}

export function saveToStorage(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}

export function clearFromStorage(key) {
	localStorage.removeItem(key);
}
