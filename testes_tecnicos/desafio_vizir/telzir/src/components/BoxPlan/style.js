import styled from "styled-components";
import { positiveAttention, negativeAttention } from "../../constants/colors";

export const Box = styled.main`
  width: 26rem;
  height: 6rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);

  @media screen and (max-width: 480px) {
    width: 22rem;
  }
  @media screen and (max-width: 400px) {
    height: 6rem;
    width: 20rem;
  }
`;
export const Table = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const ColumnTitle = styled.p`
  font-weight: bolder;
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`;
export const ValueNoPlan = styled.p`
  color: ${positiveAttention};
  font-weight: bold;
`;
export const ValueWithPlan = styled.p`
  color: ${negativeAttention};
  font-weight: bold;
`;
export const ValueWithDiscount = styled.p`
  color: ${positiveAttention};
  font-weight: bold;
`;
