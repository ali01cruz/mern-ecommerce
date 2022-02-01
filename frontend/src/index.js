import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';

//llamadas de los componetes o renderizado

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

