const API_URL = 'https://69fb20cd88a7af0ecca880ab.mockapi.io';

export async function fetchPins(boardId) {
	try {
		const response = await fetch(`${API_URL}/pins?boardId=${boardId}`);
		if (!response.ok) throw new Error('Ошибка сети');

		return await response.json();
	} catch (error) {
		console.error('API Error:', error);
		return [];
	}
}
