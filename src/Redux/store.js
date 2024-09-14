// store.js
import { createStore, combineReducers } from 'redux';
import userReducer from './reducer.js';  

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
