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
    return <div id="datepicker-region">
        <div className="date-from-label">From</div>
        <DatePicker
          key="startDate"
          dateFormat="YYYY/MM/DD"
          selected={this.props.startDate}
          onChange={this.handleStartDateChange}
          className="date-from-chooser"
        />
        <div className="date-to-label">To</div>
        <DatePicker
          key="endDate"
          dateFormat="YYYY/MM/DD"
          selected={this.props.endDate}
          onChange={this.handleEndDateChange}
          className="date-to-chooser"
        />
      </div>
    }
});

export default DateRangeCriteria;
