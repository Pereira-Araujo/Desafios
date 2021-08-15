import useProtectedPage from "../../../hooks/useProtectedPage";
import StickyHeadTable from '../../../components/TableComponent'

const ListClients = () => {
    useProtectedPage()

    return (
        <main>
            <StickyHeadTable/>
        </main>
   
    );
  };
  export default ListClients;