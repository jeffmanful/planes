import styled from "styled-components";

export const CardWrapper = styled.div`
  border-radius: 5px;
  border: 2px solid #c9c9c9;
  padding: 1em;
  background: white;

  &:after {
    border-radius: 5px;
  }

  img {
    max-width: 100%;
    height: 200px;
    /* ensure user cannot drag only image */
    -webkit-user-drag: none;
    user-select: none;
  }

  p {
    font-size: 20px;
  }
`;