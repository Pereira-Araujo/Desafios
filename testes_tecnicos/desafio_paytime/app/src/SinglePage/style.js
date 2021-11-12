import styled from "styled-components";
import Wallpaper from "../assets/resultsWallpaper.svg";

export const Box = styled.section`
  height: 84vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e5e5e5;

`;

export const LogoImageCentral = styled.img`
 width:cover;

  @media (max-width: 732px) {
    width: 620px;
  }

  @media (max-width: 638px) {
    width: 520px;
  }
  @media (max-width: 568px) {
    width: 420px;
  }
  @media (max-width: 462px) {
    width: 360px;
  }
  @media (max-width: 416px) {
    width: 280px;
  }
`;
export const BoxSearch = styled.section`
  height: 82vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, transparent 0%, #f2f2f2 100%),
    url(${Wallpaper});
  background-size: 100%;
  background-repeat: no-repeat;

  @media (max-height: 656px) {
    height: 90vh;
    padding-bottom: 0.5rem;
  }
  @media (max-width: 768px) {
    background-size: cover;
  }
`;
export const BoxResults = styled.section`
  width: 980px;
  height: 566px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  overflow-x: hidden;
  justify-content: space-around;

  @media (max-width: 732px) {
    width: 620px;
  }

  @media (max-width: 638px) {
    width: 520px;
  }
  @media (max-width: 568px) {
    width: 420px;
  }
  @media (max-width: 462px) {
    width: 360px;
  }
  @media (max-width: 416px) {
    width: 280px;
  }
`;
export const ModalContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
