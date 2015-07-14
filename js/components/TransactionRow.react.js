import React from 'react';

let TransactionRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td><input type="checkbox"/></td>
        <td>{this.props.transaction.txnDate}</td>
        <td>{this.props.transaction.categoryName}</td>
        <td>{this.props.transaction.description}</td>
        <td>{this.props.transaction.originalDescription}</td>
        <td>{this.props.transaction.amount}</td>
      </tr>
    );
  }
});

export default TransactionRow;
