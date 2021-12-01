import styled from 'styled-components';
import { primary } from '../../styles/colors';

export const Main = styled.main`
	width: 100vw;
	display: flex;
	justify-content: center;
`;

export const Container = styled.table`
	font-family: "Nunito", sans-serif;

	width: 98vw;

	thead {
		background: ${primary};
	}
	tbody {
		font-weight: bold;
	}
`;
