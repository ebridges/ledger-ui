import React from 'react';

let TransactionTableHeader = React.createClass({
  render: function() {
    return (
      <tr>
        <th colspan="2">{this.props.transactionHeaders[0]}</th>
        <th>{this.props.transactionHeaders[1]}</th>
        <th>{this.props.transactionHeaders[2]}</th>
        <th>{this.props.transactionHeaders[3]}</th>
        <th>{this.props.transactionHeaders[4]}</th>
      </tr>
    );
  }
});

export default TransactionTableHeader;
