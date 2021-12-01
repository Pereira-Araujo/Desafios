import { ContainerFlex, Wallpaper } from "./styles";
import SignInComponent from './../../components/SignInComponent/index';
// {
// 	"email": "james@tip.com.br",
// 	"password": "testando12"
// }

const Login = () => {
  return (
    <ContainerFlex>
      <Wallpaper></Wallpaper>
      <SignInComponent
        title={"Bem Vindo !"}
        labelFirst={"Email"}
        labelSecond={"Password"}
        buttonName={"Entrar"}
      />
    </ContainerFlex>
  );
};
export default Login;
