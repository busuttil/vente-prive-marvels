import React from 'react';
import { shallow } from 'enzyme';
import CharacterInfo from '../characterInfo.component';
import {
  Wrapper,
  CharacterPicture,
  CharacterTitle,
  CharacterDescription,
  CategoryList,
  CategoryListTitle,
  GoBackButton,
  Goback
} from '../characterInfo.styles';
import { AnimateLoader } from '../../loader/loader.styles';

describe('CharacterInfo', () => {
  let props;

  beforeEach(() => {
    props = {
      loadCharacterInfoActions: jest.fn(),
      character: {
        name: 'Batman',
        description:
          'Batman is a fictional superhero appearing in American comic books',
        comics: {
          items: [
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/comics/1',
              name: 'Batman vs Superman'
            }
          ]
        },
        stories: {
          items: [
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/comics/1',
              name: 'Batman vs Superman'
            }
          ]
        },
        series: {
          items: [
            {
              resourceURI: 'https://gateway.marvel.com/v1/public/comics/1',
              name: 'Batman vs Superman'
            }
          ]
        },
        thumbnail: 'https//fakeBatman.jpg'
      }
    };
  });

  const getWrapper = () => shallow(<CharacterInfo {...props} />);

  it('render Character page', () => {
    expect(getWrapper()).toMatchSnapshot();
  });

  it('render Wrapper class', () => {
    expect(shallow(<Wrapper />)).toMatchSnapshot();
  });

  it('render GoBackButton class', () => {
    props = { to: '/' };

    expect(shallow(<GoBackButton {...props} />)).toMatchSnapshot();
  });

  it('render Goback class', () => {
    expect(shallow(<Goback />)).toMatchSnapshot();
  });

  it('render CharacterPicture class', () => {
    expect(shallow(<CharacterPicture />)).toMatchSnapshot();
  });

  it('render CharacterTitle class', () => {
    expect(shallow(<CharacterTitle />)).toMatchSnapshot();
  });

  it('render CharacterDescription class', () => {
    expect(shallow(<CharacterDescription />)).toMatchSnapshot();
  });

  it('render CategoryList class', () => {
    expect(shallow(<CategoryList />)).toMatchSnapshot();
  });

  it('render CategoryListTitle class', () => {
    expect(shallow(<CategoryListTitle />)).toMatchSnapshot();
  });

  it('render AnimateLoader class', () => {
    expect(shallow(<AnimateLoader />)).toMatchSnapshot();
  });
});
