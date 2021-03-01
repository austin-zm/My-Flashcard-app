import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import StudyCard from "./StudyCard.js";
import StudyNotEnough from "./StudyNotEnough.js";
import CreateStudyPage from "./StudyPage.js";

function Study() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({
    name: "Loading, one moment",
    cards: [],
  });

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-8 ">
          <CreateStudyPage name={deck.name} id={deck.id} />
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-10">
          <h2><span>{deck.name}</span>: Study</h2>
        </div>
      </div>
      {deck.cards.length <= 2 ? (
        <div className="row d-flex">
          <div className="col">
            <StudyNotEnough deckLength={deck.cards.length} deckId={deckId} />
          </div>
        </div>
      ) : (
        <div className="row d-flex">
          <div className="col-8">
            <StudyCard cards={deck.cards} />
          </div>
        </div>
      )}
    </div>
  );
}
export default Study;
