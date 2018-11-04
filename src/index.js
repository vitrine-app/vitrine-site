import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

export default App;

if (typeof document !== 'undefined') {
  const renderMethod = (module.hot) ? (ReactDOM.render) : (ReactDOM.hydrate || ReactDOM.render);
  renderMethod(<App/>, document.getElementById('root'));
}
