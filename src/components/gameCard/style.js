import styled from 'styled-components';

export const GameCardContainer = styled.div`
	overflow: hidden;
	border-radius: 12px;
	box-shadow: 0 1px 4px 0 transparent;
	background-color: rgba(255 255 255 / 0.07);
`;
export const GameCardMediaWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 56.25%;
	overflow: hidden;
	img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		object-fit: cover;
	}
`;
export const GameCardDetails = styled.div`
	padding: 1rem;
`;
export const GameCardTitle = styled.h2`
	font-size: 22px;
	line-height: 28px;
	color: #e5e5e5;
`;
export const GameCardPlatforms = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
`;
export const GameCardPlatformsItem = styled.div`
	color: #e5e5e5;
`;
