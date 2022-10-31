import { useQuery } from 'react-query';
import { platformsPath, rawgClientApi } from '../services/rawgAPI';

export function useGamePlatformsQuery() {
	return useQuery(['gamePlatforms'], async () => {
		return await rawgClientApi.get(`${platformsPath}`).then((res) => res.data);
	});
}
