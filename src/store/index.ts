import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { T_RootState, T_AppDispatch } from "./types";
import { rootReducer } from "./rootReducer";
//api
import { swapiApi } from "../services/swapiApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) => gDM().concat(swapiApi.middleware),
});

export const useAppDispatch: () => T_AppDispatch = useDispatch;
export const useAppSelectore: TypedUseSelectorHook<T_RootState> = useSelector;
