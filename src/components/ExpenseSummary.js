import React from 'react';
import { connect } from "react-redux";
import numeral from 'numeral';
import getVisibleExpenses from "../selectors/expenses";
import getExpensesTotal from "../selectors/expenses-total";

const ExpenseSummary = ({expenseCount, expensesTotal}) => (
  <p>
    {expenseCount} item{expenseCount === 1 ? '' : 's'} selected<br />
    <b>Total:</b> {numeral(expensesTotal).format('$0,0.00')}
  </p>
  );


const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpenseSummary);