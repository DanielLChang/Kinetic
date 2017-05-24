import { combineReducers } from 'redux';
import todosReducer from './todosReducer.js';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
