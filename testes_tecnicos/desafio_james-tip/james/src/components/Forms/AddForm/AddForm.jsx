import { useContext } from 'react';
import Button from '@mui/material/Button';
import { Container, Input, Content, TopContent, FormColumns, FormEnd,Action } from './styles';
import GlobalStateContext from '../../../global/GlobalStateContext';
import { postProduct } from '../../../services/Api/endpoints';
const AddForm = () => {
	const { formData, setFormData } = useContext(GlobalStateContext);

	const newProduct = () => {
		const body = {
			product_code: formData.code,
			product_category: formData.category,
			product_name: formData.productName,
			product_provider: formData.provider,
			product_cost: formData.cost
		};
		return postProduct(body);
	};

	return (
		<Container>
			<TopContent>
				<h1>Novo Produto</h1>
			</TopContent>

			<Content>
				<Input
					required
					label="Nome "
					variant="outlined"
					value={formData.productName}
					onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
				/>
				<FormColumns>
					<Input
						required
						label="Código"
						variant="outlined"
						value={formData.code}
						onChange={(e) => setFormData({ ...formData, code: e.target.value })}
					/>
					<Input
						required
						label="Categoria "
						variant="outlined"
						value={formData.category}
						onChange={(e) => setFormData({ ...formData, category: e.target.value })}
					/>
				</FormColumns>
				<Input
					required
					label="Fornecedor"
					variant="outlined"
					value={formData.provider}
					onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
				/>
				<FormEnd>
					<Input
						required
						label="Valor "
						variant="outlined"
						value={formData.cost}
						onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
					/>
				</FormEnd>
			</Content>
			<Action>
				<Button variant="contained" onClick={newProduct}>
					Adicionar
				</Button>
			</Action>
		</Container>
	);
};

export default AddForm;
