import styled from "styled-components";
import TextField from "@mui/material/TextField";
export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: 'Nunito', sans-serif;
text-align:center;

  height: 400px;
`;

export const Input = styled(TextField)`
  @media (max-width:450px) {
  margin-bottom:8rem;
  }

 
`;

