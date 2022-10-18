import './styles/stylesheet.css';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { commentReducer, postReducer } from './redux/reducer';

import { BrowserRouter } from 'react-router-dom';
import Main from './Components/Main'
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { composeWithDevTools } from '@redux-devtools/extension';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk'

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25
})

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

