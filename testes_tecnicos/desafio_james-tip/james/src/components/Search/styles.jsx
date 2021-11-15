import styled from "styled-components";
import { lightGrey, lightGrey4, lightGrey3 } from "../../styles/colors";

export const SearchInput = styled.input`
  height: 1.5rem;
  width: 22rem;
  height: 1.8rem;
  border: ${lightGrey3} 1px solid;
  padding: 4px;
  border-radius: 6px;
  color: ${lightGrey};

  font-family: "Nunito", sans-serif;
  font-weight: 600;
  color: ${lightGrey};
  letter-spacing: 2px;

  ::-webkit-input-placeholder {
    font-weight: 600;
    color: ${lightGrey4};
    letter-spacing: 1px;
  }

  :focus {
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 1212px) {
    input {
      width: 80vw;
      padding: 8px;
    }
  }

  @media (max-width: 450px) {
    margin: 1rem;
    width: auto;
  }
`;
