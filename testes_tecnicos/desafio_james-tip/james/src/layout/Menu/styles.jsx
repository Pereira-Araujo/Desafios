import styled from 'styled-components';
import { colorToGradient, colorContrast } from '../../styles/colors';

export const Container = styled.main`
	background-image: ${colorContrast};
	width: 16vw;
	height: 98vh;
	padding-top: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${colorToGradient};

	figure {
		background: ${colorToGradient};
		width: 6rem;
		height: 6rem;
		padding: 2%;
		border-radius: 50%;

		img {
			width: 6rem;
			height: 6rem;
		}
	}

	section {
		margin-top: 4rem;

		ul {
			width: 7rem;
		}
		span {
			font-weight: bolder;
			cursor: pointer;
			font-size: 18px;
			&:hover {
				color:white;
			}
		}
	}

	footer {
		margin-top: 26rem;
		width: 10vw;
		display: flex;
		justify-content: space-between;
		cursor: pointer;
		font-weight: bolder;

		p {
			&:hover {
				color: white;
			}
		}
	}
`;
