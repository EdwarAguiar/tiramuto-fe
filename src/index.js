import React from 'react';
import ReactDOM from 'react-dom';

import App from './routes/App';

// Version vieja de React 17
// ReactDOM.render(<App />, document.getElementById('app'));

// React 18 usa esta forma
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
