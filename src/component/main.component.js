import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListCharacters from './listCharacters/listCharacters.connector';
import CharacterInfo from './characterInfo/characterInfo.connector';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={ListCharacters} />
      <Route exact path="/:id" component={CharacterInfo} />
    </Switch>
  </main>
);

export default Main;
