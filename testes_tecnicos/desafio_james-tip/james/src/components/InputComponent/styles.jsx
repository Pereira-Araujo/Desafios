import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const Input = styled(TextField)`
  max-width: 340px;
  @media (max-width: 870px) {
    min-width: 100%;
  }
`;