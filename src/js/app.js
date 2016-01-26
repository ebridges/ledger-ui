import React from 'react';
import ReactDOM from 'react-dom';
import Ledger from './components/Ledger.jsx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import ledgerReducer from './reducers/LedgerReducer';

require('../css/reset.css');
require('../css/common.css');

let logger = createLogger();
let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, promise, logger)(createStore);

let store = createStoreWithMiddleware(ledgerReducer);

ReactDOM.render(
  <Provider store={ store }>
      <Ledger />
  </Provider>,
  document.getElementById('ledgr')
);

