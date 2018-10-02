import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
