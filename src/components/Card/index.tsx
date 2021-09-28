import React from "react";
import { Workers } from "../../data/workers";

import { CardWrapper } from "./styled";

const Card = (props: Workers) => {
  return (
    <CardWrapper>
      <img 
        src={props.image} 
        alt={props.name} 
      />
      <p>{props.name}</p>
    </CardWrapper>
  );
};

export default Card;
