import styled from 'styled-components';
import { colors } from '../../theme';

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	margin: 5rem auto;
`;

export const GameSearchInput = styled.input`
	height: 46px;
	padding: 0 2rem;
	margin-bottom: 20px;
	border-radius: 50px;
	background-color: ${colors.dark};
	color: ${colors.white};
	border: 1px solid ${colors.grey};
`;
export const GamesFilterContainer = styled.div`
	display: flex;
	gap: 12px;
	margin-bottom: 1.5rem;
	select {
		width: 100%;
		max-width: 300px;
		border-radius: 0.5rem;
		padding: 0.25em 0.5rem;
		font-size: 1.25rem;
		cursor: pointer;
		line-height: 1.1;
		background-color: ${colors.dark};
		color: ${colors.white};
		&:focus {
			background-color: ${colors.white};
			color: ${colors.black};
		}
	}
`;
