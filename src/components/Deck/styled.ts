import { IconButton } from "@material-ui/core";
import styled, { css } from "styled-components";

export const DeckButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

export const DeckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 350px;
  width: 300px;
`;

export const LikedMessage = styled.p`
  font-size: 30px;
  font-weight: bold;
  opacity: 0;
  position: absolute;
  left: 75%;

  transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1) opacity;
`;

// pass as transient props to prevent them being passed to DOM
interface LikedButtonProps {
  $liked?: boolean;
  $disliked?: boolean;
  $iconColor?: string;
}
export const LikedButton = styled(IconButton)<LikedButtonProps>`
  color: ${(props) => props.$iconColor} !important;

  svg {
    transform: scale(1);
    height: 50px !important;
    width: 50px !important;
    transition: transform .6s cubic-bezier(0.39, 0.575, 0.565, 1);

    ${(props) =>
      (props.$liked || props.$disliked) &&
      css`
        transform: scale(1.3);
      `}
  }
`;

interface DislikedButtonProps {
  disliked?: boolean;
}

export const DislikedButton = styled(IconButton)<DislikedButtonProps>`
  color: red !important;

  svg {
    transform: scale(1);
    width: 80px !important;
    height: 80px !important;
    transition: transform 1s cubic-bezier(0.39, 0.575, 0.565, 1) !important;
  }

  ${(props) =>
    props.disliked &&
    css`
      transform: scale(1.3);
    `}
`;
