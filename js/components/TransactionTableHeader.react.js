import React from 'react';

let TransactionTableHeader = React.createClass({
  render: function() {
    return (
      <tr>
        <th colspan="2">{this.props.columnLabels[0]}</th>
        <th>{this.props.columnLabels[1]}</th>
        <th>{this.props.columnLabels[2]}</th>
        <th>{this.props.columnLabels[3]}</th>
        <th>{this.props.columnLabels[4]}</th>
      </tr>
    );
  }
});

export default TransactionTableHeader;
