import { useState, useEffect } from 'react';
import GlobalStateContext from './GlobalStateContext';
import { getProducts } from './../services/Api/endpoints';

const GlobalState = (props) => {
	const [ product, setProduct ] = useState([]);
	const [ productTable, setProductTable ] = useState([]);
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

	const showProducts = () => {
		return getProducts(setProduct);
	};

	const showTableProducts = () => {
		return getProducts(setProductTable)
		
	};

	useEffect(() => {
		showProducts();
		showTableProducts()
	}, [setProductTable]);

	const data = {
		login,
		setLogin,
		product,
		productTable,
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
