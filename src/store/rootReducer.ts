//deps
import { combineReducers } from "@reduxjs/toolkit";
//api
import { swapiApi } from "../services/swapiApi";

export const rootReducer = combineReducers({
  [swapiApi.reducerPath]: swapiApi.reducer,
});
