import React from 'react';

let TransactionTable = React.createClass({
    render: function() {
      let rows = [];
      this.props.transactions.forEach(function(transaction) {
        rows.push(<TransactionRow transaction={transaction} key={transaction.id} />);
      });

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
