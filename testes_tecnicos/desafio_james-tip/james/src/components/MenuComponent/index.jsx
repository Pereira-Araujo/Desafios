import JamesIcon from '../../assets/james_icon.png';

import { Container } from './styles';

const Menu = () => {
	return (
		<Container>
			<figure>
				<img src={JamesIcon} alt={'james tip icon'} />
				<h3>James Test</h3>
			</figure>

			<section>
				<ul>
					<li>teste</li>
				</ul>
			</section>
		</Container>
	);
};
export default Menu;
