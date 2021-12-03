import styled from 'styled-components';
import { lightGrey, white, mostLightGrey, colorToGradient} from '../../../styles/colors';

export const Container = styled.main`
	color: ${colorToGradient};
	height: 18rem;
	width: 14rem;
	margin: 14px;
	margin-left: 2rem;
	background: ${white};
	box-shadow: 0 0 10px ${lightGrey};
	transition: transform 100mx ease-in-out;

	&:hover {
		transform: scale(1.05);
	}

	figure {
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		cursor: pointer;

		:first-child :hover {
			background: ${mostLightGrey};
			border-radius: 100%;
		}
	}

	section {
		height: 13rem;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		h3 {
			font-size: 19px;
			font-weight: bolder;
			letter-spacing: 0.5px;
            cursor: pointer;

		}
		div {
			height: 8rem;
			p {
				color: ${lightGrey};
				margin-top: 0.5rem;
			}
			span {
				font-weight: bolder;
				letter-spacing: 1px;
				color: ${colorToGradient};
				opacity: 50%;
			}
		}

		footer {
			font-weight: bolder;
			display: flex;
			justify-content: space-between;
			p {
				cursor: pointer;
			}
		}
	}
`;
