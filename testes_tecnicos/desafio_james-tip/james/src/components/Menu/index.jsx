import { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';

import MeIcon from '../../assets/avatar.png';
import JamesIcon from '../../assets/james_icon.png';
import { changeText } from '../../services/changeText';
import { exit } from '../../services/authentication';
import { Container } from './styles';

import About from './About';
import Options from './Options';

const Menu = () => {
	const { showAbout, setShowAbout } = useContext(GlobalStateContext);

	return (
		<Container>
			<header>
				<figure>
					{showAbout ? (
						<img className={'myAvatar'} src={MeIcon} alt={'me icon'} />
					) : (
						<img src={JamesIcon} alt={'james tip icon'} />
					)}
					{showAbout ? <h3>Adriano P Araujo</h3> : <h3>James Test</h3>}
				</figure>
			</header>

			<section>{showAbout ? <About /> : <Options />}</section>

			<footer>
				<p onClick={() => setShowAbout(!showAbout)}>{changeText(showAbout, 'Menu', 'Sobre')}</p>
				<p onClick={exit}>Sair</p>
			</footer>
		</Container>
	);
};
export default Menu;
