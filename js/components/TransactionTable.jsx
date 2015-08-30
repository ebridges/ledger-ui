import React from 'react';
import TransactionRow from './TransactionRow.react.js';
import TransactionTableHeader from './TransactionTableHeader.react.js';

let TransactionTable = React.createClass({
    render: function() {
      let rows = [];
      var transactionCount = this.props.transactions.length;
      for(var i=0; i<transactionCount; i++) {
        var transaction = this.props.transactions[i];
        rows.push(<TransactionRow transaction={transaction} key={transaction.id} />);
      }
      return (
        <table>
          <thead>
            <TransactionTableHeader columnLabels={this.props.columnLabels} />
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      );
    }
});

export default TransactionTable;
