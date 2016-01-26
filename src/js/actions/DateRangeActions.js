export const START_DATE_CHANGE = 'START_DATE_CHANGE';
export const END_DATE_CHANGE = 'END_DATE_CHANGE';

export function startDateChange(startDate) {
  return {
    type: START_DATE_CHANGE,
    startDate: startDate
  };
}

export function endDateChange(endDate) {
  return {
    type: END_DATE_CHANGE,
    endDate: endDate
  };
}
