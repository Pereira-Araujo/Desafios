import styled from "styled-components";
import { secondaryColor } from "../../Constanst/colors";

export const FooterBox = styled.footer`
  height: 54px;
  background: #ffffff;
  box-shadow: 0px -4px 4px rgba(47, 37, 68, 0.15);
  color: ${secondaryColor};
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-height:656px){
   padding-top:0;
  }
`;
