import { useQuery } from 'react-query';
import { gamesPerPage } from '../config/config';
import { gamesPath, rawgClientApi } from '../services/rawgAPI';

export function useGamesListQuery(
	page,
	searchedTag,
	selectedGenres,
	selectedPlatform
) {
	return useQuery(
		['gamesList', page, selectedGenres, selectedPlatform, searchedTag],
		async () => {
			const tagFilter = searchedTag ? `&tags=${searchedTag}` : '';
			const genresFilter = selectedGenres ? `&genres=${selectedGenres}` : '';
			const platformFilter = selectedPlatform
				? `&platforms=${selectedPlatform}`
				: '';
			return await rawgClientApi
				.get(
					`${gamesPath}?page_size=${gamesPerPage}&page=${page}${tagFilter}${genresFilter}${platformFilter}`
				)
				.then((res) => res.data);
		}
	);
}
