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
    return <span id="datepicker-region">
      <span className="date-from-label">From</span>
      <span className="date-from-picker">
        <DatePicker
          key="startDate"
          dateFormat="YYYY/MM/DD"
          selected={this.props.startDate}
          onChange={this.handleStartDateChange}
          className="date-from-chooser"
        />
      </span>
      <span className="date-to-label">To</span>
      <span className="date-to-picker">
        <DatePicker
          key="endDate"
          dateFormat="YYYY/MM/DD"
          selected={this.props.endDate}
          onChange={this.handleEndDateChange}
          className="date-to-chooser"
        />
      </span>
    </span>
  }
});

export default DateRangeCriteria;
