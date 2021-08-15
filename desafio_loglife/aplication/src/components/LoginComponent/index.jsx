
import { useContext, useState } from 'react'

import { useHistory } from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { FormContainer, LoginInput, LoginButton, BorderIcon } from './style'
import { login } from '../../services/user'

import GlobalStateContext from "../../global/GlobalStateContext";

const LoginComponent = (props) => {

  const history = useHistory()
  const { email, setEmail, password, setPassword } = useContext(GlobalStateContext);

  const send = (event) => {
    const body = {
      email: email,
      password: password,
    }
    login(body, history)

    event.preventDefault();

  }

  return (

    <FormContainer onSubmit={send}>

      <BorderIcon>
        <LockOutlinedIcon />
      </BorderIcon>
      <h1>{props.title}</h1>
      <LoginInput
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label={props.labelFirst}
        name="email"
        autoComplete="email"
        value={email}
        onChange={(event) => { setEmail(event.target.value) }}
        autoFocus
      />
      <LoginInput
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label={props.labelSecond}
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(event) => { setPassword(event.target.value) }}
      />
      <LoginButton
        type="submit"
        fullWidth
        variant="contained"
        color="primary">
        {props.buttonName}
      </LoginButton>
    </FormContainer>



  );
}
export default LoginComponent