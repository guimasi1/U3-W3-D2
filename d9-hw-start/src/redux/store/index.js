import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteJobs from "../reducers/favouriteJobs";
import listOfJobs from "../reducers/listOfJobs";

const fullReducer = combineReducers({
  favouriteJobs: favouriteJobs,
  listOfJobs: listOfJobs,
});

const store = configureStore({
  reducer: fullReducer,
});

export default store;
