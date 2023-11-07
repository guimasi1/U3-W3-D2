export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FAVOURITE_JOB = "REMOVE_FAVOURITE_JOB";
export const LIST_OF_JOBS = "LIST_OF_JOBS";
export const GET_JOBS = "GET_JOBS";
const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const addToFavouritesAction = (data) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: data,
  };
};
export const removeFavouriteJobAction = (job) => {
  return {
    type: REMOVE_FAVOURITE_JOB,
    payload: job.data._id,
  };
};

export const getJobsAction = (endpoint, params) => {
  return async (dispatch) => {
    try {
      const response = await fetch(endpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        // setJobs(data);
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
        console.log(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const handleSubmitAction = (query) => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: LIST_OF_JOBS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
