import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap:30px;

  @media (max-width: 450px) {
    gap:0;
  }
`;
