import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import thunk from 'redux-thunk';

//-----------------------
//react-redux store items
//-----------------------

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Import our reducer to use when we create the store
import { stocksApp } from './reducers.js';
import { getStocks } from './actions';

let store = createStore(stocksApp, applyMiddleware(thunk));

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getStocks());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
