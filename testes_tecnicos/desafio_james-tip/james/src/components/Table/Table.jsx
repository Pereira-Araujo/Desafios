import { useContext } from 'react';

import Header from './Header/Header';
import Rows from './Rows/Rows';
import { keys } from './TitleKeys/TitleKeys';
import { Container } from './styles';

import GlobalStateContext from '../../global/GlobalStateContext';
import EditModal from '../Modals/EditModal/EditModal';
import { delProduct } from '../../services/Api/endpoints';

const Table = ({ data }) => {
	const { open, setOpen, idCode, setIdCode } = useContext(GlobalStateContext);
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
							info={line.id}
							code={line.product_code}
							category={line.product_category}
							name={line.product_name}
							provider={line.product_provider}
							cost={line.product_cost}
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
