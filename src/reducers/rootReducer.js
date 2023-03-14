import { combineReducers } from "redux";
import startReducer from "./startReducer";
import chapterReducer from "./chapterReducer";
import backgroundReducer from "./backgroundReducer";
import layoutReducer from "./layoutReducer";
import imageReducer from "./imageReducer";
//Combine all the sub reducers
const rootReducer = combineReducers({
  startReducer,
  chapterReducer,
  backgroundReducer,
  layoutReducer,
  imageReducer,
});

export default rootReducer;
