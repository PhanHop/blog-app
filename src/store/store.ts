import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from "redux-thunk";
import rootReducers from "./reducers";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
export const store = configureStore({
  reducer: rootReducers,
  middleware: [thunkMiddleware],
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

