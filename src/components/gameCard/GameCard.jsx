import React from 'react';
import {
	GameCardContainer,
	GameCardDetails,
	GameCardMediaWrapper,
	GameCardPlatforms,
	GameCardPlatformsItem,
	GameCardTitle,
} from './style';

const GameCard = ({ game }) => {
	return (
		<GameCardContainer>
			{game?.background_image && (
				<GameCardMediaWrapper>
					<img src={game.background_image} />
				</GameCardMediaWrapper>
			)}
			<GameCardDetails>
				<GameCardTitle>{game?.name}</GameCardTitle>
				<GameCardPlatforms>
					{game?.parent_platforms?.map(({ platform }) => {
						return (
							<GameCardPlatformsItem key={platform.id}>
								{platform.name}
							</GameCardPlatformsItem>
						);
					})}
				</GameCardPlatforms>
			</GameCardDetails>
		</GameCardContainer>
	);
};

export default GameCard;
