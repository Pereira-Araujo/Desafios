import { useState, useContext } from 'react';
import AddModal from '../../../components/Modals/AddModal/AddModal';
import GlobalStateContext from '../../../global/GlobalStateContext';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CalendarViewDayOutlinedIcon from '@mui/icons-material/CalendarViewDayOutlined';
import { OptionsList } from './styles';

const Options = () => {
	const [ open, setOpen ] = useState(false);
	const { setView } = useContext(GlobalStateContext);

	return (
		<main>
			<AddModal open={open} callFunction={() => setOpen(false)} />

			<OptionsList>
				<li onClick={() => setOpen(true)}>
					<AddBoxOutlinedIcon />NOVO
				</li>

				<li onClick={() => setView('grid')}>
					<GridViewOutlinedIcon />CARDS
				</li>

				<li onClick={() => setView('list')}>
					<CalendarViewDayOutlinedIcon />LISTA
				</li>
			</OptionsList>
		</main>
	);
};

export default Options;
