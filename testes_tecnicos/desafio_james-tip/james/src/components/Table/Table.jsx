import Header from './Header/Header';
import Rows from './Rows/Rows';
import { keys } from './TitleKeys/TitleKeys';
import { Container, Main } from './styles';
const Table = ({ data }) => {
	return (
		<Main>
			<Container>
				<Header keys={keys} />
				<tbody>{data.map((line) => (<Rows info={line} />))}</tbody>
			</Container>
		</Main>
	);
};
export default Table;
