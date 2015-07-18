import React from 'react';

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
