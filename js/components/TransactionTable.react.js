import React from 'react';

let TransactionTable = React.createClass({
    render: function() {
      //let headers = ['Txn Date','Category', 'Description', 'Description (orig)', 'Amount'];

      let rowHeaders = <TransactionTableHeader transactionHeaders={this.props.transactionHeaders} />;

      let rows = [];
      this.props.transactions.forEach(function(transaction) {
        rows.push(<TransactionRow transaction={transaction} key={transaction.id} />);
      });

      return (
        <table>
          <thead>
            {rowHeaders}
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      );
    }
});

export default TransactionTable;
