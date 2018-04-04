import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import { LOAD_CHARACTERS, loadCharacters } from "../characters.actions";


describe('characters.actions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  it('should create an action to load characters', () => {
    const store = mockStore({ characters: [ {id:1}, {id:2}, {id:3} ] });
    const expectedActions = [{ 'characters': [{'id': 1}, {'id': 2}, {'id': 3}], 'type': LOAD_CHARACTERS }];

    return store.dispatch(loadCharacters()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  });
});