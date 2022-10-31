import styled from 'styled-components';

export const LoaderSpinner = styled.div`
	display: inline-block;
	width: 80px;
	height: 80px;
	margin: 10rem auto;
	&::after {
		content: ' ';
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid #fff;
		border-color: #fff transparent #fff transparent;
		animation: dual-ring 1.2s linear infinite;
	}
	@keyframes dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;