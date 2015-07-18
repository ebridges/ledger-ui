import React from 'react';
import Ledger from './components/Ledger.react.js';

React.render(<Ledger/>, document.body);


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
