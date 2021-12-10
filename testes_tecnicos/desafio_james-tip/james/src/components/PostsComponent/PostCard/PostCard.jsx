import RemoveIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditIcon from '@mui/icons-material/EditRounded';
import Tooltip from '@mui/material/Tooltip';
import NumberFormat from 'react-number-format';
import { Container } from './styles';

const PostCard = ({ thisKey, name, code, category, provider, cost, callRemove, callEdit }) => {
	return (
		<Container key={thisKey}>
			<figure>
				<Tooltip title="editar" placement="left-start">
					<EditIcon onClick={callEdit} color="primary" />
				</Tooltip>
				<Tooltip title="apagar" placement="right-start">
					<RemoveIcon onClick={callRemove} color="error" />
				</Tooltip>
			</figure>
			<section>
				<Tooltip title={name} placement="top">
					<h3>{name.length > 14 ? name.substring(0, 15) + '...' : name}</h3>
				</Tooltip>

				<div>
					<p>
						Categoria: <span>{category}</span>
					</p>
					<p>
						Produtor: <span>{provider}</span>
					</p>
				</div>

				<footer>
					<NumberFormat value={cost} displayType="text" thousandSeparator={true} prefix="R$" />
					<Tooltip title={'CÓDIGO: ' + code} placement="right-start">
						<p>{code.length > 4 ? code.substring(0, 4) + '...' : code}</p>
					</Tooltip>
				</footer>
			</section>
		</Container>
	);
};
export default PostCard;
