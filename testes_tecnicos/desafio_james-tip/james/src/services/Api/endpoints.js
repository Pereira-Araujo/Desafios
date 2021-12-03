import axios from 'axios';
import { Base_Url } from '../../constants/links/index';

export const getProducts = (set) => {
	axios
		.get(`${Base_Url}`)
		.then((resp) => {
			set(resp.data);
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getProductName = (id, obj) => {
	let objProduct = obj.filter((item) => item.id === id);
	
	return objProduct[0].product_name
};

export const postProduct = (obj) => {
	return axios
		.post(`${Base_Url}`, obj)
		.then((resp) => {
			alert('Sucesso');
			window.location.reload(false);
		})
		.catch((error) => {
			alert('Algo deu errado :(');
		});
};

export const patchProduct = (id, obj) => {
	axios
		.patch(`${Base_Url}${id}`, obj)
		.then((resp) => {
			alert('Sucesso');
			window.location.reload(false);
		})
		.catch((error) => {
			alert('Algo deu errado :(');
		});
};

export const delProduct = (id) => {
	if (window.confirm('Certeza?')) {
		axios
			.delete(`${Base_Url}${id}`)
			.then((resp) => {
				window.location.reload(false);
			})
			.catch((error) => {
				alert('algo errado');
			});
	}
};
