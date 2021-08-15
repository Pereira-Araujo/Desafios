import {
    primary,
    secondary,
    neutral,
    colorToGradient,
  } from "../../style/colors";
  import MenuItem from "@material-ui/core/MenuItem";
  import WallpaperMenu from "../../assets/options_road.jpg";
  
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
  
  export const ButtonOption = styled.button`
    width: 340px;
    padding: 8px;
    border: none;
    border-radius: 2%;
    background: ${primary};
    color: white;
    font-weight: bolder;
  
    &:hover {
      background: ${secondary};
    }
  `;
  
  export const MenuOption = styled(MenuItem)`
    min-width: 340px;
    display: flex;
    justify-content: space-between;
  `;
  