import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root.jsx';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import configureStore from './store/store.js';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState =
    localStorage.state ? JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);
  const root = document.getElementById('root');

  window.store = store;

  ReactDOM.render(<Root store={ store }/>, root);
  registerServiceWorker();
});
