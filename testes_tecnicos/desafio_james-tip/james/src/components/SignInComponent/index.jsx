import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import JamesIcon from '../../assets/james_icon.png';
import { FormContainer, LoginButton, BorderIcon } from './styles';
import { authentication } from '../../services/authentication';
import GlobalStateContext from '../../global/GlobalStateContext';
import InputComponent from '../InputComponent';

const SignIn = ({ buttonName, title }) => {
	const history = useNavigate();

	const { login, setLogin } = useContext(GlobalStateContext);

	const send = (event) => {
		const body = {
			email: login.email,
			password: login.password
		};

		authentication(body, history);
		event.preventDefault();
	};

	return (
		<FormContainer onSubmit={send}>
			<BorderIcon>
				<img src={JamesIcon} alt={'james tip icon'} />
			</BorderIcon>
			<h1>{title}</h1>

			<InputComponent
				element={'email'}
				label={'E-mail'}
				value={login.email}
				callFunction={(event) => setLogin({ ...login, email: event.target.value })}
			/>
			<InputComponent
				element={'password'}
				label={'Senha'}
				value={login.password}
				callFunction={(event) => setLogin({ ...login, password: event.target.value })}
				type={'password'}
			/>

			<LoginButton type="submit" fullWidth variant="contained" color="primary">
				{buttonName}
			</LoginButton>
		</FormContainer>
	);
};
export default SignIn;
