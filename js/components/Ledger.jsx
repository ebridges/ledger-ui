import React from 'react';
import LoginStatus from './LoginStatus.react.js';
import DateRangeCriteria from './DateRangeCriteria.react.js';
import CategoryList from './CategoryList.react.js';
import TransactionTable from './TransactionTable.react.js';
import moment from 'moment';

// https://facebook.github.io/react/tips/initial-ajax.html

let Ledger = React.createClass({
  getInitialState: function() {

    return {
      start_date: moment().subtract(6, 'months'),
      end_date: moment(),
      column_labels: ["Txn Date", "Category", "Description", "Description (orig)", "Amount"],
      selected_category: 0,
      categories: [
        {"id": 0, "name": "Categories..."},
        {"id": 1, "name": "Meals"},
        {"id": 2, "name": "Groceries"},
        {"id": 3, "name": "Entertainment"}
      ],
      transactions: [
        {"id": 1, "txnDate": "2010-01-01", "categoryName": "Fruit", "description": "Apple purchase", "originalDescription" : "Apple purchase 0x1212", "amount": "$10.00"},
        {"id": 2, "txnDate": "2010-01-02", "categoryName": "Fruit", "description": "Orange purchase", "originalDescription" : "Orange purchase 0x1212", "amount": "$20.00"},
      ],
      useraccount: {"username": "ebridges"}
    }
  },

  handleCategoryChange: function(selectedCategory) {
      this.setState({
          selected_category: selectedCategory
      });
  },

  handleStartDateChange: function(startDate) {
      this.setState({
          start_date: startDate
      });
  },

  handleEndDateChange: function(endDate) {
      this.setState({
          end_date: endDate
      });
  },

  render: function() {
    return (
      <div className="ledger">
        <div><h1>Ledger</h1></div>
        <div><LoginStatus useraccount={this.state.useraccount} /></div>
        <div><DateRangeCriteria startDate={this.state.start_date} endDate={this.state.end_date} onStartDateChange={this.handleStartDateChange} onEndDateChange={this.handleEndDateChange} /></div>
        <div><CategoryList categories={this.state.categories} selectedCategory={this.state.selected_category} onCategoryChange={this.handleCategoryChange} /></div>
        <div><TransactionTable columnLabels={this.state.column_labels} transactions={this.state.transactions} /></div>
      </div>
    );
  }
});

export default Ledger;
