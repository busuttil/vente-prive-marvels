import React from 'react';
import { shallow } from 'enzyme';
import Character from '../character.component';
import {
  CharacterCard,
  CharacterInfo,
  CharacterDetail
} from '../character.styles';

describe('Character', () => {
  let props;

  beforeEach(() => {
    props = {
      name: 'Batman',
      picture: 'https//fakeBatman.jpg',
      characterId: 1,
      urls: [
        { type: 'details', url: 'http://marvel.com/characters/1/Batman' },
        { type: 'comics', url: 'http://marvel.com/characters/1/Batman' }
      ]
    };
  });

  const getWrapper = () => shallow(<Character {...props} />);

  it('render Character page', () => {
    expect(getWrapper()).toMatchSnapshot();
  });

  it('render CharacterCard class', () => {
    props = { to: '/1', picture: 'https//fakeBatman.jpg' };
    expect(shallow(<CharacterCard {...props} />)).toMatchSnapshot();
  });

  it('render CharacterInfo class', () => {
    expect(shallow(<CharacterInfo />)).toMatchSnapshot();
  });

  it('render CharacterDetail class', () => {
    expect(shallow(<CharacterDetail />)).toMatchSnapshot();
  });
});
