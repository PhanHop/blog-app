import { combineReducers } from "@reduxjs/toolkit";
import newReducer from "./newReducer";
import newsDetailReducer from "./newsDetailReducer";
const rootReducers = combineReducers({
  newsList: newReducer,
  newsDetail: newsDetailReducer
});
export default rootReducers;
