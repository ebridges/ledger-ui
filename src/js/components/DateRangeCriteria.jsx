import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker';
import {startDateChange, endDateChange} from '../actions/DateRangeActions'

require('../../css/DateRangeCriteria.css');

export default class DateRangeCriteria extends Component {

  render() {
    const { dispatch, startDate, endDate } = this.props;

    return <div className="datepicker-region">
      <span className="date-from-label">From</span>
      <span className="date-from-picker">
        <DatePicker
          key="startDate"
          dateFormat="YYYY/MM/DD"
          selected={startDate}
          onChange={(date) => dispatch(startDateChange(date))}
          className="date-from-chooser"
        />
      </span>
      <span className="date-to-label">To</span>
      <span className="date-to-picker">
        <DatePicker
          key="endDate"
          dateFormat="YYYY/MM/DD"
          selected={endDate}
          onChange={(date) => dispatch(endDateChange(date))}
          className="date-to-chooser"
        />
      </span>
    </div>
  }
}

DateRangeCriteria.propTypes = {
  dispatch: PropTypes.func.isRequired,
  startDate: PropTypes.object,
  endDate: PropTypes.object
};

function mapStateToProps(state) {
  //noinspection UnnecessaryLocalVariableJS
  const { dateRange } = state;
//noinspection UnnecessaryLocalVariableJS
  const { startDate, endDate } = dateRange;

  return {
    startDate,
    endDate
  };
}

export default connect(mapStateToProps)(DateRangeCriteria);
