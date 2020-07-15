import React from 'react';
import {connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');  // using browser routing, it will redirect to the root page, adding the action to the browser history (using back and forward browser history arrows)
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
