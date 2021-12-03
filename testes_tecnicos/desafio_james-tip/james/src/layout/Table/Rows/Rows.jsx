import RemoveIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditIcon from '@mui/icons-material/EditRounded';
import { TextTable } from './styles';

const Rows = ({ info, callEdit, callRemove, id, code, category, name, provider, cost }) => {
	// const name = Object.keys(info);
	return (
		<tr key={info}>
			<TextTable>{code} </TextTable>
			<TextTable>{category} </TextTable>
			<TextTable>{name} </TextTable>
			<TextTable>{provider} </TextTable>
			<TextTable>{cost} </TextTable>

			<TextTable>
				<EditIcon onClick={callEdit} color="primary" />
			</TextTable>
			<TextTable>
				<RemoveIcon onClick={callRemove} color="error" />
			</TextTable>
		</tr>
	);
};
export default Rows;
