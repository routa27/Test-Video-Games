import axios from 'axios';

export const baseUrl = import.meta.env.VITE_RAWG_BASE_URL;
export const apiUrl = import.meta.env.VITE_RAWG_API_URL;
const apiKey = import.meta.env.VITE_RAWG_API_KEY;

export const rawgClientApi = axios.create({
	baseUrl,
	params: {
		key: apiKey,
	},
});

export const gamesPath = `${apiUrl}/games`;
export const platformsPath = `${apiUrl}/platforms`;
export const genresdPath = `${apiUrl}/genres`;
