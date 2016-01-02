import React from 'react';
import Logo from './Logo.jsx';
import Login from './Login.jsx';
import DateRangeCriteria from './DateRangeCriteria.jsx';
import CategoryList from './CategoryList.jsx';
import TransactionTable from './TransactionTable.jsx';
import moment from 'moment';

// https://facebook.github.io/react/tips/initial-ajax.html

let Ledger = React.createClass({
  getInitialState: function() {

    return {
      application_name: "Ledger",
      start_date: moment().subtract(6, 'months'),
      end_date: moment(),
      selected_category: 0,
      column_labels: ["Txn Date", "Category", "Description", "Description (orig)", "Amount"],
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
        <div id="header">
          <Logo applicationname={this.state.application_name} />
          <Login useraccount={this.state.useraccount} />
        </div>
        <div id="body">
          <div id="navigation">
            <CategoryList selectedCategory={this.state.selected_category} onCategoryChange={this.handleCategoryChange} />
            <DateRangeCriteria startDate={this.state.start_date} endDate={this.state.end_date} onStartDateChange={this.handleStartDateChange} onEndDateChange={this.handleEndDateChange} />
          </div>
          <div id="content">
            <TransactionTable columnLabels={this.state.column_labels} transactions={this.state.transactions} />
          </div>
        </div>
      </div>
    );
  }
});

export default Ledger;
