import RemoveIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditIcon from '@mui/icons-material/EditRounded';
import { TextTable } from './styles';

const Rows = ({ info,callEdit,callRemove }) => {
	const name = Object.keys(info);
	return (
		<tr key={info}>
			{name.map((key) => <TextTable key={key}>{info[key]} </TextTable>)}

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
