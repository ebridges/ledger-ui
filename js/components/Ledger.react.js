import React from 'react';

var username = "ebridges";
var categories = ["Categories...", "Meals", "Groceries", "Entertainment"];
var columnLabels = ["Txn Date", "Category", "Description", "Description (orig)", "Amount"];
var transactions = [
  {"txnDate": "2010-01-01", "categoryName": "Fruit", "description": "Apple purchase", "originalDescription" : "Apple purchase 0x1212", "amount": "$10.00"},
  {"txnDate": "2010-01-02", "categoryName": "Fruit", "description": "Orange purchase", "originalDescription" : "Orange purchase 0x1212", "amount": "$20.00"},
];

let Ledger = React.createClass({
  render: function() {
    return (
      <div class="ledger">
        <div><h1>Ledger</h1></div>
        <div><LoginStatus username={username} /></div>
        <div><DateRangeCriteria /></div>
        <div><CategoryList categories={categories} /></div>
        <div><TransactionTable columnLabels={columnLabels} transactions={transactions} /></div>
      </div>
    );
  }
});



//React.render(<Ledger username={username} categories={categories} columnLabels={columnLabels} transactions={transactions} />, document.body);
export default Ledger;
