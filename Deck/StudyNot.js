import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

//import { Card, Button } from "react-bootstrap";

export default function StudyNotEnough(props) {
    const cardAmount = props.deckLength
    const history = useHistory();
    const deckId = props.deckId
    const handleClick = () => {
        history.push( `/decks/${deckId}/cards/new`)
    }
  return (
    <>
      <div className="row">
        <div className="col">
          <h3>Not enough cards.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>
            You need at least 3 cards in your deck to study. There are {cardAmount} cards in this deck.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className='btn btn-primary' onClick={handleClick}><span className="oi oi-plus"></span> Add Cards</button>
        </div>
      </div>
    </>
  );
}
