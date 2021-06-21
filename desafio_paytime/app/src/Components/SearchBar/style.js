import styled from "styled-components";
import { defaultColor } from "../../Constanst/colors";

export const SearchComponent = styled.form`
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;

  @media (max-height: 656px) {
    height: 90px;
  }
  @media (max-width: 1292px) {
    display: flex;
    justify-content: center;
  }
`;

export const LogoSearch = styled.img`
  @media (max-width: 1292px) {
    margin-right: 1rem;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;
export const InputComponent = styled.input`
  width: 1100px;
  border: 1px solid #e1dfe0;
  box-sizing: border-box;
  border-radius: 4px;
  height: 36px;
  padding-left: 0.5rem;

  &::-webkit-input-placeholder {
    padding-left: 0.5rem;
    font-size: 13px;
    color: #a99faa;
  }
  @media (max-width: 1292px) {
    width: 880px;
    padding-left: 0;
  }
  @media (max-width: 934px) {
    width: 440px;
  }
  @media (max-width: 526px) {
    width: 380px;
  }
  @media (max-width: 462px) {
    width: 220px;
  }
`;

export const ButtonComponent = styled.button`
  width: 36.04px;
  height: 36px;
  background: ${defaultColor};
  box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 4px 4px 0px;
`;
export const MagnifierComponent = styled.img`
  width: 20.02px;
  height: 20px;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
`;
