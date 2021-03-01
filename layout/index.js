import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../Home/Home.js";
import Study from "../Deck/Study.js";
import NotFound from "./NotFound.js";
import Header from "./Header.js";
import DeckEdit from "../Deck/Edit.js";
import DeckView from "../Deck/View.js";
import CardEdit from "../Card/Edit.js";
import CardCreate from "../Card/Create.js";
import DeckCreate from "../Deck/Create.js";

function Layout() {
  // Sets layout for entire app
  // Specifies routes for specific components
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/decks/new">
            <DeckCreate />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <DeckEdit />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CardCreate />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <CardEdit />
          </Route>
          <Route exact={true} path="/decks/:deckId">
            <DeckView />
          </Route>
          <Route exact={true} path="/decks">
            <Redirect to="/" />
          </Route>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
