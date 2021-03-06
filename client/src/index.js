import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css'; 
import {Provider} from 'react-redux';
import promiseMiddleWare from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer  from './_reducers';
import { applyMiddleware, createStore } from 'redux';

const createStoreWithMiddleWare = applyMiddleware(promiseMiddleWare,ReduxThunk)(createStore)

ReactDOM.render(
  <Provider
         store={createStoreWithMiddleWare(Reducer,
         window.__REDUX_DEVTOOLS_EXTENSION__&&
         window.__REDUX_DEVTOOLS_EXTENSION__())}            
  >
    <App />
  </Provider>
  // <React.StrictMode>
    
  // </React.StrictMode>,
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
