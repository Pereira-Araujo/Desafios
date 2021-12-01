import { ContainerFlex, Wallpaper } from "./styles";
import SignIn from "../../components/SignIn/SignIn";

// {
// 	"email": "james@tip.com.br",
// 	"password": "testando12"
// }

const Login = () => {
  return (
    <ContainerFlex>
      <Wallpaper></Wallpaper>
      <SignIn
        title={"Bem Vindo !"}
        labelFirst={"Email"}
        labelSecond={"Password"}
        buttonName={"Entrar"}
      />
    </ContainerFlex>
  );
};
export default Login;
