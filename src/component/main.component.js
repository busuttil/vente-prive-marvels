import React from "react";
import { Switch, Route } from "react-router-dom";
import ListCharacters from "./listCharacters/listCharacters.connector";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={ListCharacters} />
    </Switch>
  </main>
);

export default Main;
