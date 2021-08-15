
import LoginComponent from '../../components/LoginComponent/index'
import { ContainerFlex, Wallpaper } from './style'

// "email":"log@life.com",
// "password": "easy123"

const Login = () => {

  return (
    <ContainerFlex>
      <Wallpaper></Wallpaper>
      <LoginComponent
        title={'Bem Vindo !'}
        labelFirst={'Email'}
        labelSecond={'Password'}
        buttonName={'Entrar'}
      />
    </ContainerFlex>


  );
}
export default Login