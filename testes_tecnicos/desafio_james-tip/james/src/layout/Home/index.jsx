import { useContext } from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import GlobalStateContext from '../../global/GlobalStateContext';
import { HomePosts, Container } from './styles';
import { useFilter } from '../../hooks/useFilter';

import ContainerPost from '../Posts/ContainerPost/ContainerPost';
import Menu from '../Menu';
import Table from '../Table/Table';
import Header from '../Header';

const Home = () => {
	useProtectedPage();
	const { product,find, setFind, view } = useContext(GlobalStateContext);

	const handleSearch = (e) => {
		const { value } = e.target;
		setFind(value);
	};

	const filteredPosts = useFilter(find, product);

	return (
		<Container>
			<Menu />
			<div>
				<Header
					title={'Bem vindo !'}
					content={'Pesquise pelo código, nome , categoria ou valor'}
					callFunction={handleSearch}
					searchValue={find}
				/>
				<HomePosts>
					{view === 'list' ? (
						<Table data={filteredPosts} />
					) : (
						<section>{filteredPosts.length > 0 && <ContainerPost posts={filteredPosts} />}</section>
					)}
				</HomePosts>
			</div>
		</Container>
	);
};

export default Home;
