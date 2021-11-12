import styled from "styled-components";
import { defaultColor, secondaryColor } from "../../Constanst/colors";

export const CardModal = styled.section`
  width: 980px;
  height: 346px;
  box-shadow: 0px 0px 6px rgba(47, 37, 68, 0.25);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;

  @media (max-width: 994px) {
    width: 880px;
  }
  @media (max-width: 890px) {
    width: 720px;
  }
  @media (max-width: 724px) {
    width: 620px;
  }
  @media (max-width: 626px) {
    width: 320px;
    height: 565px;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
export const BoxModal = styled.div`
  width: 800px;
  display: flex;
  @media (max-width: 890px) {
    width: 620px;
  }

  @media (max-width: 626px) {
    width: 225px;
    height: 320px;
    flex-direction: column;
    align-items: center;
  }
`;
export const PhotoModal = styled.img`
  width: 266px;
  height: 266px;
  border-radius: 10px;

  @media (max-width: 718px) {
    width: 240px;
    padding-left: 0.5rem;
  }

  @media (max-width: 626px) {
    padding-top: 1rem;
  }
`;
export const BoxText = styled.div`
  display: flex;
  margin-left: 2rem;
  flex-direction: column;

  @media (max-width: 626px) {
    margin-left: 0;
  }
`;

export const BoxTopics = styled.div`
  width: 480px;
  display: flex;
  justify-content: space-between;
  line-height: 4px;
  padding-top: 2px;

  & a {
    text-decoration: none;
    color: ${secondaryColor};
  }
  @media (max-width: 890px) {
    width: 320px;
  }
  @media (max-width: 724px) {
    width: 280px;
  }
`;

export const Information = styled.p`
  color: ${secondaryColor};
  text-align: end;
`;
export const TextAlignLeft = styled.p`
  text-align: left;
  color: ${secondaryColor};
`;
export const Line = styled.div`
  border: 0.5px solid #e1dfe0;
  margin-top: 0;
`;
export const ModalButton = styled.div`
  margin-top: 2.2rem;
  width:100%;
  display:inline;

  & button {
    width: 87px;
    background: white;
    border: 2px solid ${defaultColor};
    border-radius: 4px;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${defaultColor};
    text-align: center;
    float:right;

  }

  & button:hover {
    background: ${defaultColor};
    color: white;
  }
`;
