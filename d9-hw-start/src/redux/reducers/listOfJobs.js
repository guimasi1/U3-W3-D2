import { LIST_OF_JOBS, GET_JOBS } from "../actions";

const initialState = {
  jobsList: [],
  content: [],
};

const listOfJobs = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobsList: action.payload,
      };
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
