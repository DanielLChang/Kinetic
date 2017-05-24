import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer.js';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState);
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });

  return store;
};

export default configureStore;
