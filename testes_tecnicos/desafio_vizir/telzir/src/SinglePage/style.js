import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import wallpaper from "../assets/wallpaper.jpg";
import { backgroundColor } from "../constants/colors";

export const Container = styled.main`
  width: auto;
  height: 100vh;
  background-image: url(${wallpaper});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 1060px) {
    height: 106vh;
  }
  @media screen and (max-width: 400px) {
    height:100vh;
    background-size:auto 106vh;
  }
  
`;
export const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  letter-spacing: 2px;
  text-shadow: -5px -2px 0px rgba(54, 150, 150, 0.56);

  @media screen and (max-width: 400px) {
    letter-spacing: 0;
  }
  
`;
export const Box = styled.section`
  width: 26rem;
  height: 4rem;
  padding: 1rem;
  background: ${backgroundColor};

  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 480px) {
    width: 22rem;
  }
  @media screen and (max-width: 400px) {
    width: 20rem;
  }
`;

export const InputMinutes = styled(TextField)`
  width: 6rem;
`;

// @media (max-width:320px) { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
// @media (max-width:480px) { /* smartphones, Android phones, landscape iPhone */ }
// @media (max-width:600px) { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
// @media (max-width:801px) { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
// @media (max-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
// @media (max-width:1281px) { /* hi-res laptops and desktops */ }
