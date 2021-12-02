import { useContext } from 'react';
import GlobalStateContext from '../../../../global/GlobalStateContext';

import IconButton from '@mui/material/IconButton';
import { ButtonIcon } from './styles';

export default function ButtonTableComponent({ text }) {
	const { setView } = useContext(GlobalStateContext);

	return (
		<main onClick={() => setView('list')}>
			<IconButton  color="primary" value="list" aria-label="list">
				<ButtonIcon />
			</IconButton>
			<span>{text}</span>
		</main>
	);
}
