import { useContext } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import GlobalStateContext from "../../global/GlobalStateContext";
import { Container } from "./styles";
import { useFilter } from "../../hooks/useFilter";

import ContainerPost from "../Posts/ContainerPost/ContainerPost"
import Menu from "../../components/MenuComponent";
import Table from '../Table/Table'

const Home = () => {
  useProtectedPage();
  const { product, find, setFind, view } = useContext(GlobalStateContext);

  const handleSearch = (e) => {
    const { value } = e.target;
    setFind(value);
  };

  const filteredPosts = useFilter(find, product);

  return (
    <>
     
      <Container>
      <Menu  />
        {view === 'list' ? <Table data={filteredPosts} /> : <>{filteredPosts.length > 0 && <ContainerPost posts={filteredPosts} />}</>}
      </Container>
    </>
  );
};

export default Home;
