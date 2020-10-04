import person from "../../Person/Person";
import * as actionsTypes from "../actions";

const INITIAL_STATE = {
  person: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADD:
      return {
        ...state,
        person: state.person.concat({
          id: Math.random(), // not really unique but good enough here!
          name: action.personData.name,
          age: action.personData.age,
        }),
      };

    case actionsTypes.DELETE:
      const updateArray = state.person.filter(
        (pers) => pers.id !== action.persElId
      );
      return {
        ...state,
        person: updateArray,
      };
  }
  console.log(state.person);
  return state;
};
