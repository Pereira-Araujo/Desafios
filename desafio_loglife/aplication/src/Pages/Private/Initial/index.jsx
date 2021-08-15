import useProtectedPage from "../../../hooks/useProtectedPage";
import { goToClients, goToAddClients } from '../../../routes/Coordinator'
import MenuComponent from '../../../components/MenuComponent'
import {Container,Title } from './style'


const Initial = () => {

    useProtectedPage()

    return (
        <Container>
            <Title>Bem-Vindos</Title>
            <MenuComponent
                buttonTitle={"SUAS OPÇÕES AQUI"}
                callPageOne={goToClients}
                callPageTwo={goToAddClients}
                titleLinkOne={"Lista de Clientes"}
                titleLinkTwo={"Adicionar Clientes"} />
        </Container>

    );
};
export default Initial;