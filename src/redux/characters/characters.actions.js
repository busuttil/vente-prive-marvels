import request from "superagent";
import moment from "moment";
import {
  API_PUBLIC,
  API_PRIVATE,
  BASE_URL,
  URI_CHARACTERS
} from "../../component/constants";
const crypto = require("crypto");

const getTimestamp = () => moment().unix();

const queryParams = () => {
  const concatenatedString = `${getTimestamp()}${API_PRIVATE}${API_PUBLIC}`;
  const hash = crypto.createHash("md5");

  return hash.update(concatenatedString).digest("hex");
};

export const LOAD_CHARACTERS = "LOAD_CHARACTERS";
export const loadCharacters = () => dispatch => {
  return new Promise(resolve => {

    request
      .get(
        `${BASE_URL}${URI_CHARACTERS}?ts=${getTimestamp()}&apikey=${API_PUBLIC}&hash=${queryParams()}`
      )
      .end((err, res) => {
        const characters = res.body.data.results;

        resolve(characters);
        return dispatch({
          type: LOAD_CHARACTERS,
          characters
        });
      });
  });
};


export const LOAD_CHARACTER_INFO = "LOAD_CHARACTER_INFO";
export const loadCharacterInfo = id => dispatch => {
  return new Promise(resolve => {
    request
      .get(
        `${BASE_URL}${URI_CHARACTERS}/${id}?ts=${getTimestamp()}&apikey=${API_PUBLIC}&hash=${queryParams()}`
      )
      .end((err, res) => {
        const character = res.body.data.results[0];

        resolve(id, character);
        return dispatch({
          type: LOAD_CHARACTER_INFO,
          id,
          character
        });
      });
  });
};
