import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  CharacterCard,
  CharacterInfo,
  CharacterDetail,
  CharacterDetailLink
} from './character.styles';

const buttonHandler = url => event => {
  event.preventDefault();
  window.open(url, '_blank');
};

const renderButton = urls =>
  _.map(urls, url => (
    <CharacterDetailLink
      key={`${url.url}__${url.type}`}
      title={url.type}
      alt={url.type}
      onClick={buttonHandler(url.url)}
    >
      <p>{url.type}</p>
    </CharacterDetailLink>
  ));

const Character = ({ name, picture, characterId, urls }) => (
  <CharacterCard to={`/${characterId}`} picture={picture}>
    <CharacterInfo>
      <h1>{name}</h1>
      <CharacterDetail>{renderButton(urls)}</CharacterDetail>
    </CharacterInfo>
  </CharacterCard>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  characterId: PropTypes.number.isRequired,
  urls: PropTypes.array.isRequired
};

export default Character;
