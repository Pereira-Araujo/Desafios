import { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalStateContext from './GlobalStateContext';
import { Base_Url } from '../constants/links';

const GlobalState = (props) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ product, setProduct ] = useState([]);
	const [ find, setFind ] = useState('');
	const [ open, setOpen ] = useState(false);

	const [formData,setFormData] = useState({
		code:'',
		category:'',
		productName:'',
		provider:'',
		cost:''

	})
	

	const [ upCode, setUpCode ] = useState('');
	const [ upCategory, setUpCategory ] = useState('');
	const [ upName, setUpName ] = useState('');
	const [ upProvider, setUpProvider ] = useState('');
	const [ upCost, setUpCost ] = useState('');

	const [ idCode, setIdCode ] = useState('');

	const [ view, setView ] = useState('card');

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
		email,
		setEmail,
		password,
		setPassword,
		product,
		find,
		setFind,
		open,
		setOpen,
		formData,
		setFormData,

		upCode,
		setUpCode,
		upCategory,
		setUpCategory,
		upName,
		setUpName,
		upProvider,
		setUpProvider,
		upCost,
		setUpCost,

		idCode,
		setIdCode,
		view,
		setView
	};
	return <GlobalStateContext.Provider value={data}>{props.children}</GlobalStateContext.Provider>;
};
export default GlobalState;
