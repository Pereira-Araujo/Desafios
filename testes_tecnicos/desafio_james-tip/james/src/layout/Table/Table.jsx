import { useContext, useState } from 'react';

import Header from './Header/Header';
import Rows from './Rows/Rows';
import { keys } from './TitleKeys/TitleKeys';
import { Container } from './styles';

import GlobalStateContext from '../../global/GlobalStateContext';
import EditModal from '../Modals/EditModal/EditModal';
import { delProduct } from '../../services/Api/endpoints';

const Table = ({ data }) => {
	const { idCode, setIdCode } = useContext(GlobalStateContext);
	const [ open, setOpen ] = useState(false);

	const removeProduct = (id) => {
		return delProduct(id);
	};

	const openModal = (id) => {
		setIdCode(id);
		setOpen(true);
	};
	return (
		<Container>
			<EditModal open={open} thisId={idCode} callFunction={() => setOpen(false)} />

			<table>
				<Header keys={keys} />
				<tbody>
					{data.map((line) => (
						<Rows
							info={line}
							callEdit={() => openModal(line.id)}
							callRemove={() => removeProduct(line.id)}
						/>
					))}
				</tbody>
			</table>
		</Container>
	);
};
export default Table;
