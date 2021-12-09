import RemoveIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditIcon from '@mui/icons-material/EditRounded';
import { TextTable } from './styles';
import NumberFormat from 'react-number-format';
import Tooltip from '@mui/material/Tooltip';

const Rows = ({ info, callEdit, callRemove, code, category, name, provider, cost }) => {
	return (
		<tr key={info}>
			<TextTable>{code} </TextTable>
			<TextTable>{category.toUpperCase()} </TextTable>
			<TextTable>{name.toUpperCase()} </TextTable>
			<TextTable>{provider.toUpperCase()} </TextTable>
			<TextTable>
				<NumberFormat value={cost} displayType="text" thousandSeparator={true} prefix="R$" />{' '}
			</TextTable>

			<TextTable>
				<Tooltip title="editar" placement="right-start">
					<EditIcon onClick={callEdit} color="primary" />
				</Tooltip>
			</TextTable>
			<TextTable>
				<Tooltip title="apagar" placement="right-start">
					<RemoveIcon onClick={callRemove} color="error" />
				</Tooltip>
			</TextTable>
		</tr>
	);
};
export default Rows;
