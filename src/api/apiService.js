const BASE_URL = 'https://69fb20cd88a7af0ecca880ab.mockapi.io';

const apiService = {
	get: async function (urlPrefix) {
		const response = await fetch(`${BASE_URL}/${urlPrefix}`);

		if (!response.ok) throw new Error(`GET ${urlPrefix} failed: ${response.status}`);
		return response.json();
	},
	post: async function (urlPrefix, data) {
		const response = await fetch(`${BASE_URL}/${urlPrefix}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});

		if (!response.ok) throw new Error(`POST ${urlPrefix} failed: ${response.status}`);
		return response.json();
	},
	put: async function (urlPrefix, data) {
		const response = await fetch(`${BASE_URL}/${urlPrefix}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});

		if (!response.ok) throw new Error(`PUT ${urlPrefix} failed: ${response.status}`);
		return response.json();
	},
	delete: async function (urlPrefix) {
		const response = await fetch(`${BASE_URL}/${urlPrefix}`, {
			method: 'DELETE',
		});

		if (!response.ok) throw new Error(`DELETE ${urlPrefix} failed: ${response.status}`);
		return response.json();
	},
};

export default apiService;
