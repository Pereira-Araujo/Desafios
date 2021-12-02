
import { useContext, useState } from 'react';
import GlobalStateContext from '../../../global/GlobalStateContext';
import PostCard from '../../Posts/PostCard/PostCard';
import EditModal from '../../Modals/EditModal/EditModal';
import {Container } from './styles';
import { delProduct } from '../../../services/Api/endpoints';

export const ContainerPost = ({ posts }) => {
	const { idCode, setIdCode } = useContext(GlobalStateContext);
	const [ open, setOpen ] = useState(false);

	const removeProduct = (id) => {
		return delProduct(id)
	};

	const openModal = (id) => {
		setIdCode(id);
		setOpen(true);
	};
	return (
		<Container>
			<EditModal open={open} thisId={idCode} callFunction={() => setOpen(false)} />
				{posts.map((post) => {
					return (
						<PostCard
							callRemove={() => removeProduct(post.id)}
							callEdit={() => openModal(post.id)}
							key={post.id}
							name={post.product_name.toUpperCase()}
							code={post.product_code.toUpperCase()}
							category={post.product_category.toUpperCase()}
							provider={post.product_provider.toUpperCase()}
							cost={post.product_cost.toUpperCase()}
						/>
					);
				})}
		</Container>
	);
};
export default ContainerPost;
