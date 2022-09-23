import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
  searchField: "",
};

export const searchRobots = (state = initialState, action = {}) => {
  console.log("%c 🍏 action", "color:#ed9ec7", action);
  console.log("%c 🥔 state", "color:#3f7cff", state);
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};
