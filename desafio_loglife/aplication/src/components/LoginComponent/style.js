import styled from "styled-components";

import { primary, secondary, neutral } from "../../style/colors";

import TextField from "@material-ui/core/TextField";


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
