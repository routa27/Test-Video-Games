import React from 'react';
import GameCard from '../gameCard/GameCard';
import { GamesListContainer } from './style';

const GamesList = ({ games }) => {
	return games && games.length > 0 ? (
		<GamesListContainer>
			{games.map((game) => {
				return <GameCard key={game.id} game={game} />;
			})}
		</GamesListContainer>
	) : (
		<p>No results</p>
	);
};

export default GamesList;
