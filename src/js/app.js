import React from 'react';
import ReactDOM from 'react-dom';
import Ledger from './components/Ledger.jsx';
import LedgrStore from './store/LedgrStore';
import { Provider } from 'react-redux';
import { configure } from "redux-auth";

require('../css/reset.css');
require('../css/common.css');

var store = LedgrStore.store();

// maybe move this to LedgrStore?
store.dispatch(configure({
  apiUrl: "http://localhost:9000"
}));

ReactDOM.render(
  <Provider store={ store }>
      <Ledger/>
  </Provider>,
  document.getElementById('ledgr')
);

