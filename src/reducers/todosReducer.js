import {
  RECEIVE_TODOS,
  RECEIVE_TODO,
} from '../actions/todoActions.js';

import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_TODOS:
      newState = {};
      for (let i = 0; i < action.todos.length; i++) {
        const todo = action.todos[i];
        newState[todo.id] = todo;
      }
      return newState;
    case RECEIVE_TODO:
      const newTodo = {[action.todo.id]: action.todo};
      return merge({}, state, newTodo);
    default:
      return state;
  }
};

export default todosReducer;
