import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
//import { Card, button } from "react-bootstrap";

export default function StudyCard(props) {
  const history = useHistory();
  const cardInfo = props.cards;

  const [front, setFront] = useState(true);
  const [back, setBack] = useState(false);
  const [counter, setCounter] = useState(1);
  const [studyCard, setStudyCard] = useState(0);
  const handleClick = () => {
    setBack((prevState) => {
      return (prevState = !prevState);
    });
    setFront((prevState) => {
      return (prevState = !prevState);
    });
  };
  const handleNextClick = () => {
    setFront(true);
    setBack(false);
    setCounter((prevCount) => {
      return (prevCount += 1);
    });
    setStudyCard((prevCard) => {
      return (prevCard += 1);
    });
    if (studyCard === cardInfo.length - 1) {
      const confirmed = window.confirm(
        "Restart cards?\n\nClick cancel to return to the home page."
      );
      if (confirmed) {
        setCounter(1);
        setStudyCard(0);
      } else if (!confirmed) {
        history.push("/");
      }
    }
  };

  const allCards = cardInfo.map((card) => {
    return (
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                Card {counter} of {cardInfo.length}
              </h5>
              <p className="card-text">
                {front === true ? card.front : card.back}
              </p>
              <div className="row">
                <div className="col">
                  <button className="btn btn-secondary" onClick={handleClick}>
                    Flip
                  </button>
                  {back === true ? (
                    <button
                      className="mx-2 btn btn-primary"
                      onClick={handleNextClick}
                      
                    >
                      Next
                    </button>
                  ) : (
                    null
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{allCards[studyCard]}</>;
}
