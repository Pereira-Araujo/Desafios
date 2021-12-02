import RemoveIcon from '@mui/icons-material/CancelRounded';
import EditIcon from '@mui/icons-material/EditRounded';
import { Container } from './styles';
import NumberFormat from 'react-number-format';

const PostCard = ({ key, name, code, category, provider, cost, callRemove, callEdit }) => {
	return (
		<Container key={key}>
			<figure>
				<RemoveIcon onClick={callRemove} color="error" />
				<EditIcon onClick={callEdit} color="primary" />
			</figure>
			<section>
				<div>
					<p>Cód.: {code}</p>
				</div>
				<h3>{name}</h3>
				<p>Categoria: {category}</p>
				<p>Produtor: {provider}</p>

				<article>
					<NumberFormat value={cost} displayType="text" thousandSeparator={true} prefix="R$" />
				</article>
			</section>
		</Container>
	);
};
export default PostCard;
