import styled from 'styled-components';
import { colors } from '../../theme';

export const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin-top: 2rem;
`;

export const PaginationBtn = styled.div`
	background-color: ${colors.dark};
	color: ${colors.white};
	padding: 0.7rem 1rem;
	border-radius: 1rem;
	min-width: 50px;
	text-align: center;
	border: 1px solid rgba(255, 255, 255, 0.1);
	cursor: pointer;
	transition: all 0.4s ease;
	&:hover {
		background-color: ${colors.white};
		color: ${colors.black};
	}
`;
