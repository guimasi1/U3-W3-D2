export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FAVOURITE_JOB = "REMOVE_FAVOURITE_JOB";
export const LIST_OF_JOBS = "LIST_OF_JOBS";
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

export const handleSubmitAction = () => {
  return async (dispatch) => {
    console.log("sono nella funzione");
    try {
      let response = await fetch(baseEndpoint + "&limit=20");
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
