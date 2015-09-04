import React from 'react';

let TransactionRow = React.createClass({
  render: function() {
    let t = this.props.transaction;
    let tid = "t" + t.id;
    return (
      <tr>
        <td className="checkbox-region">
          <input id={tid} type="checkbox" name="transactionId" value={t.id}/>
          <label htmlFor={tid}/>
        </td>
        <td>{t.txnDate}</td>
        <td>{t.categoryName}</td>
        <td>{t.description}</td>
        <td>{t.originalDescription}</td>
        <td>{t.amount}</td>
      </tr>
    );
  }
});

export default TransactionRow;
