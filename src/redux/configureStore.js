import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import carReducer from './Adds/adds';


const RootReducer = combineReducers({
  adds: carReducer,
});

const store = createStore(RootReducer, applyMiddleware(thunk, logger));

export default store;
