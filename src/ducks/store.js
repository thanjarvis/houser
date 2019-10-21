import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import logger from 'redux-logger'

import reducer from './reducer'

const rootReducer = combineReducers({
    reducer
  });  

export default createStore(rootReducer, applyMiddleware(logger, promiseMiddleware))






