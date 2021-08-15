import {
  neutral,
  colorToGradient,
} from "../../../style/colors";

import WallpaperMenu from "../../../assets/options_road.jpg";

import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(
      to bottom,
      transparent 0%,
      ${colorToGradient} 98%
    ),
    url(${WallpaperMenu});
  background-size: cover;
`;
export const Title = styled.h1`
  color: ${neutral};
  font-size: 6rem;
`;

