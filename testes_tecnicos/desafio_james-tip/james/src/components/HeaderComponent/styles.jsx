import styled from 'styled-components';
import { darkDefault, lightDefault } from '../../styles/colors';

export const Container = styled.main`
	height: 10rem;
	width: 74vw;
	padding: 1.6rem;
	padding-top: 3rem;
	color: ${darkDefault};
	display: flex;
	flex-direction: column;
	justify-content: space-around;


	section {
		margin-top: 0.5rem;
		background: blue;
		min-height: 8rem;
		width: 70vw;
		border-radius: 16px;
		background: ${lightDefault};
		margin-right:8px;

		display: flex;
		align-items: center;

		article {
			margin-left: 2rem;
		}
	}
`;
