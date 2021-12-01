import { ContainerFlex, Wallpaper } from "./styles";
import SignIn from "../../components/SignInComponent";

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
