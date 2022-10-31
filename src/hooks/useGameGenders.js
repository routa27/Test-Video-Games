import { useQuery } from 'react-query';
import { genresdPath, rawgClientApi } from '../services/rawgAPI';

export function useGameGenresQuery() {
	return useQuery(['gameGenres'], async () => {
		return await rawgClientApi.get(`${genresdPath}`).then((res) => res.data);
	});
}
