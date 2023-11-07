import { LIST_OF_JOBS } from "../actions";

const initialState = {
  content: [],
};

const listOfJobs = (state = initialState, action) => {
  switch (action.type) {
    case LIST_OF_JOBS:
      return {
        ...state,
        content: action.payload.data,
      };
    default:
      return state;
  }
};

export default listOfJobs;
