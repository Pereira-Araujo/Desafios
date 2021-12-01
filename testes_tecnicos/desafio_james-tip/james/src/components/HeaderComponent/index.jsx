import SearchComponent from './../SearchComponent';
import { Container } from './styles';

const HeaderComponent = ({ title, content, callFunction, searchValue }) => {
	return (
		<Container>
			<h1>{title}</h1>
			<p>{content}</p>

			<section>
				<article>
					<SearchComponent callFunction={callFunction} searchValue={searchValue} />
				</article>
			</section>
		</Container>
	);
};
export default HeaderComponent;
