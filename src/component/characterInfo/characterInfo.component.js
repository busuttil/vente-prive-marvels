import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import GoBackIcons from '../../icons/go-back.svg';
import LoaderIcons from '../../icons/loader.svg';
import {
  GoBackButton,
  Goback,
  Wrapper,
  WrapperCharacterInfo,
  CharacterPicture,
  CharacterTitle,
  CharacterDescription,
  CategoryList,
  CategoryListTitle
} from './characterInfo.styles';
import { AnimateLoader } from '../loader/loader.styles';

class CharacterInfo extends Component {
  componentDidMount() {
    this.props.loadCharacterInfoActions();
  }

  renderListItem = ({ name }) => <li key={name}>{name}</li>;

  renderCharacterInfo = () => {
    const { character } = this.props;

    if (!character) {
      return <AnimateLoader src={LoaderIcons} alt="laoder" />;
    }

    const { name, description, comics, stories, series, thumbnail } = character;

    return (
      <WrapperCharacterInfo>
        <CharacterPicture
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={name}
        />
        <CharacterTitle>{name}</CharacterTitle>
        <CharacterDescription>{description}</CharacterDescription>
        <CategoryList>
          <CategoryListTitle>Comics</CategoryListTitle>
          {_.map(comics.items, this.renderListItem)}
        </CategoryList>
        <CategoryList>
          <CategoryListTitle>Stories</CategoryListTitle>
          {_.map(stories.items, this.renderListItem)}
        </CategoryList>
        <CategoryList>
          <CategoryListTitle>Series</CategoryListTitle>
          {_.map(series.items, this.renderListItem)}
        </CategoryList>
      </WrapperCharacterInfo>
    );
  };

  render() {
    return (
      <Wrapper>
        <GoBackButton to="/">
          <Goback src={GoBackIcons} alt="go back" />
        </GoBackButton>
        {this.renderCharacterInfo()}
      </Wrapper>
    );
  }
}

CharacterInfo.propTypes = {
  loadCharacterInfoActions: PropTypes.func.isRequired,
  character: PropTypes.object
};

export default CharacterInfo;
