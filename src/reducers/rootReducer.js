import dataReducer from './dataReducer';
import {combineReducers} from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
      dataReducer: dataReducer,
})

export default rootReducer