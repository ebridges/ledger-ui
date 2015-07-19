import React from 'react';
import LoginStatus from './LoginStatus.react.js';
import DateRangeCriteria from './DateRangeCriteria.react.js';
import CategoryList from './CategoryList.react.js';
import TransactionTable from './TransactionTable.react.js';
import moment from 'moment';

let Ledger = React.createClass({
  getInitialState: function() {
    return {
      selected_category: 0,
      start_date: moment().subtract(6, 'months'),
      end_date: moment(),
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
      <div class="ledger">
        <div><h1>Ledger</h1></div>
        <div><LoginStatus username={this.props.username} /></div>
        <div><DateRangeCriteria startDate={this.state.start_date} endDate={this.state.end_date} onStartDateChange={this.handleStartDateChange} onEndDateChange={this.handleEndDateChange} /></div>
        <div><CategoryList categories={this.props.categories} selectedCategory={this.state.selected_category} onCategoryChange={this.handleCategoryChange} /></div>
        <div><TransactionTable columnLabels={this.props.columnLabels} transactions={this.props.transactions} /></div>
      </div>
    );
  }
});

export default Ledger;
