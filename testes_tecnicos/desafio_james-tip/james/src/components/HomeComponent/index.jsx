import { useContext } from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import GlobalStateContext from '../../global/GlobalStateContext';
import { HomePosts, Container } from './styles';
import { useFilter } from '../../hooks/useFilter';

import ContainerPost from '../PostsComponent/ContainerPost/ContainerPost';
import MenuComponent from '../MenuComponent';
import TableComponent from '../TableComponent/Table';
import HeaderComponent from '../HeaderComponent';

const HomeComponent = () => {
	useProtectedPage();
	const { product,find, setFind, view } = useContext(GlobalStateContext);

	const handleSearch = (e) => {
		const { value } = e.target;
		setFind(value);
	};

	const filteredPosts = useFilter(find, product);

	return (
		<Container>
			<MenuComponent />
			<div>
				<HeaderComponent
					title={'Bem vindo !'}
					content={'Pesquise pelo código, nome , categoria ou valor'}
					callFunction={handleSearch}
					searchValue={find}
				/>
				<HomePosts>
					{view === 'list' ? (
						<TableComponent data={filteredPosts} />
					) : (
						<section>{filteredPosts.length > 0 && <ContainerPost posts={filteredPosts} />}</section>
					)}
				</HomePosts>
			</div>
		</Container>
	);
};

export default HomeComponent;
