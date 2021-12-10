import styled from "styled-components";

import { primary, secondary,white } from "../../styles/colors";

import TextField from "@material-ui/core/TextField";
import WallpaperLogin from "../../assets/wallpaper_login.jpg";

export const ContainerFlex = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: row;

  @media (max-width: 870px) {
    align-items: center;
    justify-content:center;
    flex-direction:column;
  }
`;
export const Wallpaper = styled.section`
  background: url(${WallpaperLogin});
  background-size: cover;
  width: 60vw;

  @media (max-width: 870px) {
   display:none;
  }
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
  min-width: 340px;
`;
export const LoginButton = styled.button`
  width: 340px;
  padding: 8px;
  border: none;
  border-radius: 2%;
  background: ${primary};
  color:${white};
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
    color: ${white};
  }
`;
