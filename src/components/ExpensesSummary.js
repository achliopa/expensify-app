import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';


// MY CODE 

// export const ExpensesSummary = (props) => (
// 	<div>
// 		{props.expenses.length > 0 && 
// 			<h3>
// 				Viewing {
// 					props.expenses.length
// 				} expense(s) totalling {
// 					numeral(selectExpensesTotal(props.expenses) /100)
// 					.format('0,0.00')
// 				}&euro;
// 			</h3>
// 		}
// 	</div>
// );

// const mapStateToProps = (state) => {
//   return {
//       expenses: selectExpenses(state.expenses,state.filters)
//   };
// };

// export default connect(mapStateToProps)(ExpensesSummary);

// COURSE CODE

export const ExpensesSummary = (props) => {
	const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses';
	const formattedExpensesTotal = `${numeral(props.expensesTotal/100).format('0,0.00')}`;
	return (
		<div>
			<h2> 
				Viewing {props.expenseCount} {expenseWord} totalling {formattedExpensesTotal}&euro;
			</h2>
		</div>
	);
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses,state.filters);
  return {
      expenseCount: visibleExpenses.length,
      expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);