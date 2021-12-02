import styled from 'styled-components';
import { lightGrey, lightGrey4 } from '../../../styles/colors';

export const Container = styled.main`
	height: 18rem;
	width: 14rem;
	margin: 14px;
	margin-left: 2rem;
	background: white;
	box-shadow: 0 0 10px ${lightGrey4};
	transition: transform 100mx ease-in-out;
	font-family: "Nunito", sans-serif;

	&:hover {
		transform: scale(1.05);
	}

	figure {
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		cursor: pointer;
	}

	section {
		padding: 1rem;

		p {
			color: ${lightGrey};
		}
		article {
			margin-top: 1rem;
		}
		div {
			p {
				color: ${lightGrey};
				margin-bottom: 4px;
			}
		}
	}
`;
