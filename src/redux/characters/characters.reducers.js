import { LOAD_CHARACTERS } from "./characters.actions";

const initialState = {
  list: [],
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

    default:
      return state;
  }
};
