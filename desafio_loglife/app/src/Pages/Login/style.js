import styled from "styled-components";

import { primary, secondary, neutral } from "../../constants/colors";

import TextField from "@material-ui/core/TextField";
import RandomWallpaper from "../../assets/wallpaper-login.jpg";

export const ContainerFlex = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
export const Wallpaper = styled.section`
  background: url(${RandomWallpaper});
  background-size: 100vw;
  width: 60vw;
  height: 100vh;
`;

export const FormContainer = styled.form`
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginInput = styled(TextField)`
  max-width: 340px;
`;
export const LoginButton = styled.button`
  width: 340px;
  padding: 8px;
  border: none;
  border-radius: 2%;
  background: ${primary};
  color: white;
  font-weight: bolder;

  &:hover {
    background: ${secondary};
  }
`;

export const BorderIcon = styled.div`
  background: ${secondary};
  padding: 2%;
  border-radius: 100%;

  svg {
    color: ${neutral};
  }
`;
