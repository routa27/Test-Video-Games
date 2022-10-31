import styled from 'styled-components';

export const GamesListContainer = styled.div`
	display: grid;
	grid-gap: 1rem;
	margin-top: 1rem;
	/* Screen larger than 768px 3 columns */
	@media (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
	/* Screen larger than 992px 4 columns */
	@media (min-width: 992px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;
