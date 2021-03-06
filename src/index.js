import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
// import {addExpense} from './actions/expenses';
// import {setTextFilter} from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// store.dispatch(addExpense({description: 'Water bill', amount: 4500}));
// store.dispatch(addExpense({description: 'Gas bill', amount: 7400, createdAt: 1000}));
// store.dispatch(addExpense({description: 'Rent', amount: 109500}));
// store.dispatch(setTextFilter('water'));
// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000);

// const state = store.getState();

// console.log(getVisibleExpenses(state.expenses, state.filters));

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, 
  document.getElementById('root'));
