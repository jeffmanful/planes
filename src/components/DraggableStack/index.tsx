
import { Workers } from "../../data/workers";
import Card from "../Card";
import { CardWrapper } from "./styled";

interface DraggableStackProps {
  cards: Workers[];
  handleDrag: any;
  handleDragEnd: any;
  handleDragStart: any;
}

const DraggableStack = (props: DraggableStackProps) => {
  return (
    <>
      {props.cards?.map((card: Workers, index: number) => {
        const shift = index <= 2 ? 0 + index * 10 : 0;
        const zIndex = index === 0 ? 100 : 0 - index;

        return (
          <CardWrapper
            zIndex={zIndex}
            top={shift}
            draggable
            onDragStart={props.handleDragStart}
            onDragEnd={props.handleDragEnd}
            onDrag={props.handleDrag}
            key={card.id}
          >
            <Card name={card.name} image={card.image} />
          </CardWrapper>
        );
      })}
    </>
  );
};

export default DraggableStack;
