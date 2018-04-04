import styled, { keyframes } from "styled-components";

export const Animate = keyframes`
 from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const AnimateLoader = styled.img`
  width: 200px;
  height: 200px;
  margin: auto;
  animation: ${Animate} 2s linear infinite;
`;