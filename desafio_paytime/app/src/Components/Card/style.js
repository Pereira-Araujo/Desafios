import styled from "styled-components";
import { defaultColor } from "../../Constanst/colors";

export const CardPerson = styled.article`
  box-shadow: 0px 0px 6px rgba(47, 37, 68, 0.25);
  border-radius: 10px;
  background: #ffffff;
  width: 225px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  @media(max-height:656px){
    margin-bottom:1rem;
  }
`;

export const CardPhoto = styled.img`
  width: 225px;
  height: 160px;
  border-radius: 10px 10px 0px 0px;
`;
export const CardText = styled.div`
  width: 215px;
  line-height: 6px;
  color: #2f2544;
  & h2 {
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: capitalize;
  }
  & p {
    color: ${defaultColor};
    font-size: 14px;
  }
  & a {
    color: #03cada;
    font-size: 13px;
  }
`;
export const CardButton = styled.button`
  width: 210px;
  height: 36px;
  background: ${defaultColor};
  border-radius: 20px;
  border: none;
  color: white;
  font-weight: 500;
  margin-bottom: 1rem;

  &:hover {
    background: white;
    color: ${defaultColor};
    border: solid 1px ${defaultColor};
    font-weight: bold;
  }
`;
