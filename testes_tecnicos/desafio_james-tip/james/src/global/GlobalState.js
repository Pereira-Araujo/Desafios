import { useState, useEffect } from 'react';
import GlobalStateContext from './GlobalStateContext';
import { getProducts } from './../services/Api/endpoints';

const GlobalState = (props) => {
	const [ product, setProduct ] = useState([]);

	const [ find, setFind ] = useState('');
	const [ idCode, setIdCode ] = useState('');
	const [ view, setView ] = useState('card');

	const [ open, setOpen ] = useState(false);
	const [ showAbout, setShowAbout ] = useState(false);

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

	const showProducts = () => {
		return getProducts(setProduct);
	};

	useEffect(() => {
		showProducts();
	}, []);

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
		showAbout,
		setShowAbout,

		idCode,
		setIdCode,
		view,
		setView
	};
	return <GlobalStateContext.Provider value={data}>{props.children}</GlobalStateContext.Provider>;
};
export default GlobalState;
