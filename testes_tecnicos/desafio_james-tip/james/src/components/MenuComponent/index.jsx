import ButtonAdd from '../ButtonsComponent/ButtonAddComponent';
import Search from './../SearchComponent';
import { Container, Title, SubContainer } from './styles';
import JamesIcon from '../../assets/james_icon.png';
import ButtonChangeView from '../ButtonsComponent/ButtonChangeViewComponent';

const Menu = ({ callFunction, searchValue }) => {
	return (
		<Container>
			hola!!!
			{/* 
				<SubContainer>
					<Title>Bem vindo a nossa plataforma</Title>

					<Search callFunction={callFunction} searchValue={searchValue} />
					<ButtonAdd />
					<ButtonChangeView />
				</SubContainer>
				<img src={JamesIcon} alt={'icon'} />
			*/}
		</Container>
	);
};
export default Menu;
