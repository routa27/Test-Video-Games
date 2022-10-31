import React, { useState } from 'react';
import GamesList from '../../components/gamesList/GamesList';
import { useGameGenresQuery } from '../../hooks/useGameGenders';
import { useGamePlatformsQuery } from '../../hooks/useGamePlatform';
import { useGamesListQuery } from '../../hooks/useGamesList';
import { GameSearchInput, GamesFilterContainer, HomeContainer } from './style';

const Home = () => {
	const [page, setPage] = useState(1);
	const [searchedTag, setSearchedTag] = useState('');
	const [selectedGenre, setSelectedGenre] = useState();
	const [selectedPlatform, setSelectedPlatform] = useState();
	const {
		isError,
		error,
		data: gamesList,
	} = useGamesListQuery(page, searchedTag, selectedGenre, selectedPlatform); //Pass filter params to the Query

	const { isLoadingGenres, data: gameGenres } = useGameGenresQuery();
	const { isLoadingPlatforms, data: gamePlatforms } = useGamePlatformsQuery();

	if (isError) {
		// Show error message
		return <h2>{error.message}</h2>;
	}

	const handleKeyDown = (e) => {
		//Handle Search on press Enter
		if (e.key === 'Enter') {
			setSearchedTag(e.target.value);
		}
	};

	return (
		<HomeContainer>
			<GameSearchInput
				type='text'
				placeholder='Search (Press Enter)'
				onKeyDown={handleKeyDown}
			></GameSearchInput>
			<GamesFilterContainer>
				<select name='genre' onChange={(e) => setSelectedGenre(e.target.value)}>
					<option value={''}>Genres</option>
					{!isLoadingGenres &&
						gameGenres?.results.map((genre) => {
							return (
								<option
									key={genre.id}
									value={genre.id}
									selected={genre.id === +selectedGenre}
								>
									{genre.name}
								</option>
							);
						})}
				</select>
				<select
					name='platform'
					onChange={(e) => setSelectedPlatform(e.target.value)}
				>
					<option value={''}>Platforms</option>
					{!isLoadingPlatforms &&
						gamePlatforms?.results.map((platform) => {
							return (
								<option key={platform.id} value={platform.id}>
									{platform.name}
								</option>
							);
						})}
				</select>
			</GamesFilterContainer>
			<GamesList games={gamesList?.results} />
		</HomeContainer>
	);
};

export default Home;
