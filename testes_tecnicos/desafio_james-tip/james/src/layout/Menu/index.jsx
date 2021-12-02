import JamesIcon from '../../assets/james_icon.png';

import { Container } from './styles';
import ButtonAddComponent from '../../components/ButtonsComponent/ButtonAddComponent';
import ButtonGridComponent from '../../components/ButtonsComponent/ButtonChangeViewComponent/ButtonGridComponent';
import ButtonTableComponent from '../../components/ButtonsComponent/ButtonChangeViewComponent/ButtonTableComponent';

const Menu = () => {
	return (
		<Container>
			
				<figure>
					<img src={JamesIcon} alt={'james tip icon'} />
					<h3>James Test</h3>
				</figure>

				<section>
					<ul>
						<li>
							<ButtonAddComponent text="Novo" />
						</li>

						<li>
							<ButtonGridComponent text="Cards" />
						</li>

						<li>
							<ButtonTableComponent text="Lista" />
						</li>
					</ul>
				</section>
			
			<footer>
				<p>Sobre</p>
				<p>Sair</p>
			</footer>
		</Container>
	);
};
export default Menu;
