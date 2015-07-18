import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

let DateRangeCriteria = React.createClass({
  getInitialState: function() {
    return {
      start_date: moment().subtract(6, 'months'),
      end_date: moment(),
    }
  },
  
  handleStartDateChange: function(date) {
    this.setState({
      start_date: date
    });
  },

  handleEndDateChange: function(date) {
    this.setState({
      end_date: date
    });
  },

  render: function() {
    return <div>
        <DatePicker
          key="startDate"
          selected={this.state.start_date}
          onChange={this.handleStartDateChange}
        />
        <DatePicker
          key="endDate"
          dateFormat="YYYY/MM/DD"
          selected={this.state.end_date}
          onChange={this.handleEndDateChange}
        />
      </div>
    }
});

export default DateRangeCriteria;
