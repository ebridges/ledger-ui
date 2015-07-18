import React from 'react';
import LoginStatus from './LoginStatus.react.js';
import DateRangeCriteria from './DateRangeCriteria.react.js';
import CategoryList from './CategoryList.react.js';
import TransactionTable from './TransactionTable.react.js';

let Ledger = React.createClass({
  render: function() {
    return (
      <div class="ledger">
        <div><h1>Ledger</h1></div>
        <div><LoginStatus username={this.props.username} /></div>
        <div><DateRangeCriteria /></div>
        <div><CategoryList categories={this.props.categories} /></div>
        <div><TransactionTable columnLabels={this.props.columnLabels} transactions={this.props.transactions} /></div>
      </div>
    );
  }
});

export default Ledger;
