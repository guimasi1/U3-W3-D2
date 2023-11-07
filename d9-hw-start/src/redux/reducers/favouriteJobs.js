import { ADD_TO_FAVOURITES } from "../actions";
import { REMOVE_FAVOURITE_JOB } from "../actions";

const initialState = {
  content: [],
};

const favouriteJobs = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        content: [...state.favouriteJobs.content, action.payload],
      };

    case REMOVE_FAVOURITE_JOB:
      return {
        ...state,
        content: state.favouriteJobs.content.filter(
          (job) => job.data._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default favouriteJobs;
