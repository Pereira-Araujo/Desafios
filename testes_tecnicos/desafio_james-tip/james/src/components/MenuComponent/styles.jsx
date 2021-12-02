import styled from 'styled-components';
import { colorToGradient,darkDefault } from '../../styles/colors';

export const Container = styled.div`

background-color:${darkDefault};
	width: 22vw;
	height: 100vh;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;

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
		display: block;

		li {
			cursor: pointer;
		}
	}
`;
