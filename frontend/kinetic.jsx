import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';

class Root extends React.Component {
  render() {
    return(
      <div className="root">
        <Clock />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root/>, root);
});
