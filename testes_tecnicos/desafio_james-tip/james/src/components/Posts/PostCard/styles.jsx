import styled from "styled-components";
import { lightGrey, lightGrey4 } from "../../../styles/colors";

export const Container = styled.div`
  margin: 2rem;
  background: white;
  box-shadow: 0 0 10px ${lightGrey4};
  transition: transform 100mx ease-in-out;
  font-family: "Nunito", sans-serif;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Post = styled.div`
  padding: 1rem;
`;
export const LightText = styled.p`
  color: ${lightGrey};
`;
export const LightTextMargin = styled.p`
  color: ${lightGrey};
  margin-bottom: 0.5rem;
`;

export const Price = styled.p`
  margin-top: 0.5rem;
`;
export const Actions = styled.div`
padding:1rem;
display:flex;
justify-content:space-between;
cursor:pointer;
`