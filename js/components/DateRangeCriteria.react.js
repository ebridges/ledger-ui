import React from 'react';
import DatePicker from 'react-datepicker';

let DateRangeCriteria = React.createClass({

  handleStartDateChange: function(date) {
    this.props.onStartDateChange(date);
  },

  handleEndDateChange: function(date) {
    this.props.onEndDateChange(date);
  },

  render: function() {
    return <div>
        <DatePicker
          key="startDate"
          dateFormat="YYYY/MM/DD"
          selected={this.props.startDate}
          onChange={this.handleStartDateChange}
        />
        <DatePicker
          key="endDate"
          dateFormat="YYYY/MM/DD"
          selected={this.props.endDate}
          onChange={this.handleEndDateChange}
        />
      </div>
    }
});

export default DateRangeCriteria;
