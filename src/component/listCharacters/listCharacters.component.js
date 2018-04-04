import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import Character from "../character/character.component";
import { ListCharactersWrapper } from "./listCharacters.styles";

class ListCharacters extends Component {
  componentDidMount() {
    this.props.loadCharactersActions();
  }

  generateCharacters = () =>
    _.map(this.props.characters, character => {
      const { id, name, thumbnail } = character;
      const picture = `${thumbnail.path}.${thumbnail.extension}`;

      return <Character key={id} name={name} picture={picture} characterId={id} urls={character.urls} />;
    });

  render() {
    return (
      <ListCharactersWrapper>{this.generateCharacters()}</ListCharactersWrapper>
    );
  }
}

ListCharacters.propTypes = {
  characters: PropTypes.array.isRequired,
  loadCharactersActions: PropTypes.func.isRequired
};

export default ListCharacters;
