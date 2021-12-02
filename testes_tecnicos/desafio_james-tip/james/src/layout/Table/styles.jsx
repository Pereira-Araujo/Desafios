import styled from 'styled-components';
import { primary } from '../../styles/colors';

export const Container = styled.main`
	width: 68vw;
	display: flex;
	justify-content: center;
	margin-left: 2rem;
	margin-top: 2rem;

	table {
		font-family: "Nunito", sans-serif;

		width: 98vw;

		thead {
			background: ${primary};
		}
		tbody {
			font-weight: bold;
			cursor:pointer;

			
		}
	}
`;
