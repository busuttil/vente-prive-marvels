import React from 'react';
import { shallow } from 'enzyme';
import ListCharacters from "../listCharacters.component";
import { ListCharactersWrapper } from "../listCharacters.styles";

describe('ListCharacters', () => {
  let props;

  beforeEach(() => {
    props = {
      loadCharactersActions: jest.fn(),
      characters: [
        {
          name: 'Batman',
          id: 1,
          thumbnail: { path: "http://Batman", extension: "jpg" },
          urls:[]
        },
        {
          name: 'Superman',
          id: 2,
          thumbnail: { path: "http://Superman", extension: "jpg" },
          urls:[]
        }
      ],
    };
  });

  const getWrapper = () => shallow(<ListCharacters {...props} />);

  it('render Character page', () => {
    expect(getWrapper()).toMatchSnapshot();
  });

  it('render ListCharactersWrapper class', () => {
    expect(shallow(<ListCharactersWrapper />)).toMatchSnapshot();
  });
});
