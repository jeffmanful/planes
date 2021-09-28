import styled from "styled-components";

interface CardWrapperProps {
  top: number;
  zIndex: number;
}

export const CardWrapper = styled.div<CardWrapperProps>`
  position: absolute;
  top: ${(props) => props.top}px;
  z-index: ${(props) => props.zIndex};
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 225px;
`;