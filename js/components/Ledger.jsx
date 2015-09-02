import React from 'react';
import Logo from './Logo.jsx';
import LoginStatus from './LoginStatus.jsx';
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
      column_labels: ["Txn Date", "Category", "Description", "Description (orig)", "Amount"],
      selected_category: 0,
      categories: [
        {"id": 0, "name": "All categories"},
        {"id": 1, "name": "Meals"},
        {"id": 2, "name": "Groceries"},
        {"id": 3, "name": "Entertainment"},
        {"id": 4, "name": "Work > Transportation > Public > Subway"}
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
        <div id="header">
          <Logo applicationname={this.state.application_name} />
          <LoginStatus useraccount={this.state.useraccount} />
        </div>
        <div id="body">
          <div id="navigation">
            <div id="navigation-left">
              <CategoryList categories={this.state.categories} selectedCategory={this.state.selected_category} onCategoryChange={this.handleCategoryChange} />
            </div>
            <div id="navigation-right">
              <DateRangeCriteria startDate={this.state.start_date} endDate={this.state.end_date} onStartDateChange={this.handleStartDateChange} onEndDateChange={this.handleEndDateChange} />
            </div>
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
