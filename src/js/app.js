import React from 'react';
import ReactDOM from 'react-dom';
import Ledger from './components/Ledger.jsx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ledgerReducer from './reducers/LedgerReducer';

require('../css/reset.css');
require('../css/common.css');

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

let store = createStoreWithMiddleware(ledgerReducer);

ReactDOM.render(
  <Provider store={ store }>
      <Ledger />
  </Provider>,
  document.getElementById('ledgr')
);

