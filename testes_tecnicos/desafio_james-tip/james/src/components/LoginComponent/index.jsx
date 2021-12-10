import { ContainerFlex, Wallpaper } from "./styles";
import SignInComponent from './SignInComponent';
// {
// 	"email": "james@tip.com.br",
// 	"password": "testando12"
// }

const LoginComponent = () => {
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
export default LoginComponent;
