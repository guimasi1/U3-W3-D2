import { ADD_TO_FAVOURITES } from "../actions";
import { REMOVE_FAVOURITE_JOB } from "../actions";

const initialState = {
  jobs: [],
};
const favouriteJobs = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };

    case REMOVE_FAVOURITE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.data._id !== action.payload),
      };
    default:
      return state;
  }
};

export default favouriteJobs;
