import reducer from '../characters.reducers';
import expect from 'expect';
import { LOAD_CHARACTERS, LOAD_CHARACTER_INFO } from '../characters.actions';

describe('characters.reducer', () => {
  const initialState = {
    list: [],
    details: {}
  };

  it('should load the initial characters state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should reduce with characters', () => {
    const action = {
      type: LOAD_CHARACTERS,
      characters: [{ id: 1 }, { id: 2 }, { id: 3 }]
    };

    expect(reducer({}, action)).toEqual({
      list: [{ id: 1 }, { id: 2 }, { id: 3 }]
    });
  });

  it('should reduce with character info', () => {
    const action = {
      type: LOAD_CHARACTER_INFO,
      id: 12,
      character: { id: 12, name: 'batman' }
    };

    expect(reducer({}, action)).toEqual({
      details: { 12: { id: 12, name: 'batman' } }
    });
  });
});
