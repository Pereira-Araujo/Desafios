import styled from "styled-components";
import { lightColorDefault } from "../../constants/colors";
import ShowMoreText from "react-show-more-text";

export const Box = styled.div`
  width: 453px;
  padding: 1rem;
  @media screen and (max-width: 380px) {
    padding: 0;
    width: 100vw;
  }
`;
export const CardAbout = styled.div`
  display: block;
  line-height: 0;
  opacity: 0.7;

  @media screen and (max-width: 380px) {
    display: none;
  }
`;

export const AboutPodcast = styled(ShowMoreText)`
  overflow: auto;
  font-style: italic;
  font-weight: 600;
  font-size: 16px;
  line-height: 15px;
  width: 360px;
  height: 110px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ShowMoreLess = styled.div`
  margin-top: 8px;
  font-size: 14px;
  font-style: italic;
  color: ${lightColorDefault};
`;

export const CardBoxList = styled.div`
  margin-top: -1rem;
  h6 {
    font-size: 8px;
    opacity: 0.5;
    letter-spacing: 0.46em;
  }
  @media screen and (max-width: 380px) {
    margin-left: 1.2rem;
    margin-right: 1.2rem;
    height: 300px;
  }
`;

export const CardList = styled.div`
  height: 208px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 380px) {
    height: 268px;
  }
`;
