import { LOAD_CHARACTERS, LOAD_CHARACTER_INFO } from "./characters.actions";

const initialState = {
  list: [],
  details: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CHARACTERS: {
      const { characters } = action;

      return {
        ...state,
        list: [...characters]
      };
    }
    case LOAD_CHARACTER_INFO: {
      const { character, id } = action;

      return {
        ...state,
        details: {
          ...state.details,
          [id]: character
        }
      };
    }

    default:
      return state;
  }
};
