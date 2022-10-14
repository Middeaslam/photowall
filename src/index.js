import './styles/stylesheet.css';

import { BrowserRouter } from 'react-router-dom';
import Main from './Components/Main'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import reportWebVitals from './reportWebVitals';
import rootReducer from './redux/reducer';

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

