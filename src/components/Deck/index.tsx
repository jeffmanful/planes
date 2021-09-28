import { CheckCircleOutline, HighlightOff } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Workers } from "../../data/workers";
import DraggableStack from "../DraggableStack";
import { DeckButtons, DeckWrapper, LikedButton } from "./styled";

interface Props {
  cards: Workers[];
  onChange: (card: any) => void;
}

const Deck = (props: Props) => {
  const [cards, setCards] = useState<Workers[]>([]);
  const [currentCard, setCurrentCard] = useState<any>();
  const [likedWorkers, setLikedWorkers] = useState<any>([]);
  const [dislikedWorkers, setDislikedWorkers] = useState<any>([]);

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const [startPosition, setStartPosition] = useState<number>(0);

  const hasCards = cards.length > 0;
  const { onChange } = props;

  useEffect(() => {
    setCards(props.cards);
  }, [props.cards]);

  useEffect(() => {
    onChange({ likedWorkers, dislikedWorkers });
  }, [likedWorkers, dislikedWorkers, onChange])

  useEffect(() => {
    if (hasCards) {
      setCurrentCard(cards[0]);
      setLiked(false);
      setDisliked(false);
    }
  }, [cards, hasCards]);

  const removeTopCard = () => {
    let temp = [...cards];
    temp.shift();

    setCards(temp);
  };

  const handleAccept = () => {
    if (hasCards) {
      setLikedWorkers([...likedWorkers, currentCard]);
      removeTopCard();
      setLiked(false);
    }
  };

  const handleDecline = () => {
    if (hasCards) {
      setDislikedWorkers([...dislikedWorkers, currentCard]);
      removeTopCard();
      setDisliked(false);
    }
  };

  const handleDrag = (e: any) => {
    if (e.clientX > startPosition + 100) {
      setLiked(true);
      setDisliked(false);
      return;
    } else if (liked) {
      setLiked(false);
      return;
    }

    if (e.clientX < startPosition - 100 && e.clientX !== 0) {
      setDisliked(true);
      return;
    } else {
      setDisliked(false);
    }
  };

  const handleDragStart = (e: any) => {
    setStartPosition(e.clientX);
  };

  const handleDragEnd = (e: any) => {
    const endPosition = e.clientX;

    // moving right
    if (endPosition > startPosition + 100) {
      setLiked(true);
      setDisliked(false);
      handleAccept();
      return;
    }

    // moving right
    if (endPosition < startPosition - 100) {
      setDisliked(true);
      setLiked(false);
      handleDecline();
      return;
    }
  };

  if (!currentCard) return null;

  return (
    <>
      <DeckWrapper>
        {cards.length === 0 && <p>End of list</p>}
        <DraggableStack
          cards={cards}
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
          handleDrag={handleDrag}
        />
      </DeckWrapper>
      <DeckButtons className="fl-r-sb">
        <LikedButton
          onClick={handleDecline}
          $disliked={disliked}
          $iconColor="#fc1c03"
        >
          <HighlightOff />
        </LikedButton>
        <LikedButton onClick={handleAccept} $liked={liked} $iconColor="#20a855">
          <CheckCircleOutline />
        </LikedButton>
      </DeckButtons>
    </>
  );
};

export default Deck;
