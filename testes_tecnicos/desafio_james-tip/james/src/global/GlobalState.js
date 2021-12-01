import { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalStateContext from './GlobalStateContext';
import { Base_Url } from '../constants/links';

const GlobalState = (props) => {
	const [ product, setProduct ] = useState([]);
	const [ find, setFind ] = useState('');
	const [ open, setOpen ] = useState(false);
	const [ idCode, setIdCode ] = useState('');
	const [ view, setView ] = useState('card');

	const [ login, setLogin ] = useState({
		email: '',
		password: ''
	});

	const [ formData, setFormData ] = useState({
		code: '',
		category: '',
		productName: '',
		provider: '',
		cost: ''
	});

	const [ editFormData, setEditFormData ] = useState({
		code: '',
		category: '',
		productName: '',
		provider: '',
		cost: ''
	});

	const getProducts = () => {
		axios
			.get(`${Base_Url}`)
			.then((resp) => {
				setProduct(resp.data);
				console.log(resp.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => getProducts(), []);

	const data = {
		login,
		setLogin,
		product,
		find,
		setFind,
		open,
		setOpen,
		formData,
		setFormData,
		editFormData,
		setEditFormData,

		idCode,
		setIdCode,
		view,
		setView
	};
	return <GlobalStateContext.Provider value={data}>{props.children}</GlobalStateContext.Provider>;
};
export default GlobalState;
