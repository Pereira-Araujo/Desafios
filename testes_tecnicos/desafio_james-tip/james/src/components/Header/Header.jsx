import ButtonAdd from '../Buttons/ButtonAdd/ButtonAdd';
import Search from './../Search/Search';
import { Container, Title, SubContainer } from './styles';
import JamesIcon from '../../assets/james_icon.png';
import ButtonChangeView from '../Buttons/ButtonChangeView/ButtonChangeView';

const Header = ({ callFunction, searchValue }) => {
	return (
		<main>
			<Container>
				<SubContainer>
					<Title>Bem vindo a nossa plataforma</Title>

					<Search callFunction={callFunction} searchValue={searchValue} />
					<ButtonAdd />
					<ButtonChangeView />
				</SubContainer>
				<img src={JamesIcon} alt={'icon'} />
			</Container>
		</main>
	);
};
export default Header;
