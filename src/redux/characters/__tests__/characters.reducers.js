import reducer from '../characters.reducers';
import expect from 'expect';
import { LOAD_CHARACTERS } from "../characters.actions";

describe('characters.reducer', () => {
  const initialState = {
    list: []
  };

  it('should load the initial characters state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should reduce with characters', () => {
    const action = {
      type: LOAD_CHARACTERS,
      characters: [ {id: 1}, {id: 2}, {id: 3} ]
    };

    expect(reducer({}, action)).toEqual({ 'list': [{'id': 1}, {'id': 2}, {'id': 3}] });
  });
});
