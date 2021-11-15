import styled from "styled-components";
import { colorToGradient, white } from "../../styles/colors";
export const Container = styled.div`
  width: auto;
  height: 4rem;
  padding: 2rem;
  padding-top: 3rem;
  display: flex;
  justify-content: space-around;

  background: ${colorToGradient};
  color: ${white};

  @media (max-width: 690px) {
    height: 6rem;

    img {
      display: none;
    }
  }

  @media (max-width: 450px) {
    display: block;

  }
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  @media (max-width: 690px) {
    flex-direction: column;
  }
`;
export const Title = styled.h2`
  margin-right: 1rem;
  @media (max-width: 690px) {
    margin-bottom: 1rem;
  }

  @media (max-width: 450px) {
    display: none;
  }
`;
