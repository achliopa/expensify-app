import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
// import { addExpense } from '../actions/expenses';
import { startAddExpense } from '../actions/expenses';

// const AddExpensePage = (props) => (
//     <div>
//     	<h1>Add Expense</h1>
//         <ExpenseForm 
//             onSubmit={(expense) => {
//                 props.dispatch(addExpense(expense));
//                 props.history.push('/');
//             }}
//         />
//     </div>
// );
// export default connect()(AddExpensePage);

// ## lecture 124 - Adding dispatch to props
// * easier testing, adding spies. clear code

// const AddExpensePage = (props) => (
//     <div>
//     	<h1>Add Expense</h1>
//         <ExpenseForm 
//             onSubmit={(expense) => {
//                 // props.dispatch(addExpense(expense));
//                 props.onSubmit(expense);
//                 props.history.push('/');
//             }}
//         />
//     </div>
// );

// Tranform it to Class Component

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        // this.props.addExpense(expense);
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
      // addExpense: (expense) => dispatch(addExpense(expense))
      startAddExpense: (expense) => dispatch(startAddExpense(expense))
    };
};

// export default connect()(AddExpensePage);

export default connect(undefined, mapDispatchToProps)(AddExpensePage);