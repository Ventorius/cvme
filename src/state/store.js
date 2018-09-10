/* eslint-disable no-underscore-dangle */
import {
  createStore, applyMiddleware, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './User/reducer';
import modalReducer from './Modal/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
});

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk));

export default store;
