import React from 'react';
import Ledger from './components/Ledger.react.js';

var username = "ebridges";
var categories = ["Categories...", "Meals", "Groceries", "Entertainment"];
var columnLabels = ["Txn Date", "Category", "Description", "Description (orig)", "Amount"];
var transactions = [
  {"txnDate": "2010-01-01", "categoryName": "Fruit", "description": "Apple purchase", "originalDescription" : "Apple purchase 0x1212", "amount": "$10.00"},
  {"txnDate": "2010-01-02", "categoryName": "Fruit", "description": "Orange purchase", "originalDescription" : "Orange purchase 0x1212", "amount": "$20.00"},
];

React.render(<Ledger username={username} categories={categories} columnLabels={columnLabels} transactions={transactions} />, document.body);


// import React from 'react';
// import Router from 'react-router';
// import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
//
// import Ledger from './components/Ledger.react.js';
//
// let App = React.createClass({
//   render() {
//     return (
//       <div className="ledger">
//         <RouteHandler/>
//         <Ledger/>
//       </div>
//     );
//   }
// });
//
// let routes = (
//   <Route name="app" path="/" handler={App}>
//     <Route name="login" path="/login" handler={LoginHandler}/>
//   </Route>
// );
//
// Router.run(routes, function (Handler) {
//   React.render(<Handler/>, document.body);
// });
