import { combineReducers } from "redux";
import startReducer from "./startReducer";
import chapterReducer from "./chapterReducer";
import backgroundReducer from "./backgroundReducer";
import messageReducer from "./messageReducer";
import imageReducer from "./imageReducer";
import dataReducer from "./dataReducer";
//Combine all the sub reducers
const rootReducer = combineReducers({
  startReducer,
  chapterReducer,
  backgroundReducer,
  messageReducer,
  imageReducer,
  dataReducer,
});

export default rootReducer;
