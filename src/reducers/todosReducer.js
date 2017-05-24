import {
  RECEIVE_TODOS,
  RECEIVE_TODO,
} from '../actions/todoActions.js';

const todosReducer = (state = {}, action) => {
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
    default:
      return state;
  }
};

export default todosReducer;
