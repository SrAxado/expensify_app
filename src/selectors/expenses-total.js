const getExpensesTotal = (expenses) => {
  // let total = 0;

  // expenses.map(expense => total += expense.amount);
  // return total;

  return expenses
        .map(expense => expense.amount)
        .reduce((accumulator, currentExpense) => accumulator + currentExpense, 0);
}

export default getExpensesTotal;