import axios from 'axios';
import { Base_Url } from './../constants/links/index';

export const addProduct = (obj) => {
	return axios
		.post(`${Base_Url}`, obj)
		.then((resp) => {
			alert('Sucesso');
			window.location.reload(1);
		})
		.catch((error) => {
			alert('Algo deu errado :(');
		});
};

export const editProduct = (id, obj) => {
	axios
		.patch(`${Base_Url}${id}`, obj)
		.then((resp) => {
			alert('Sucesso');
			window.location.reload(1);
		})
		.catch((error) => {
			alert('Algo deu errado :(');
		});
};

export const removeProduct = (id) => {
	axios
		.delete(`${Base_Url}${id}`)
		.then((resp) => {
			alert('Produto excluido com sucesso!');
			window.location.reload(1);
		})
		.catch((error) => {
			alert('algo errado');
		});
};
