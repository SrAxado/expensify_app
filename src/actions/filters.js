// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sort: 'date'
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  sort: 'amount'
});

// SET_START_DATE
export const setStartDate = (dateStamp) => ({  // the default parameters initialization is by default undefined
  type: 'SET_START_DATE',
  date: dateStamp
});


// SET_END_DATE
export const setEndDate = (dateStamp) => ({
  type: 'SET_END_DATE',
  date: dateStamp
});