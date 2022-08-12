import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from '../src/app/cmp-app';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import allReducers from '../src/state/manager/reducer-manager';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { checkAuthExpired } from './state/feature/login/auth-action';

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);


if (localStorage.getItem("zingAppJWT")) {
  checkAuthExpired(store.dispatch)
}



ReactDOM.render(
  <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
    <Provider store={store}>
    <Route component={AppContainer} />
      </Provider>
      </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
