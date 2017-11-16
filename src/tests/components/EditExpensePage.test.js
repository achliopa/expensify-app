import React from 'react';
import { EditExpensePage } from '../../components/EditExpensePage';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
	editExpense = jest.fn();
	removeExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage 
			editExpense={editExpense} 
			removeExpense={removeExpense} 
			history={history}
			expense={expenses[1]}
		/>
	);
});

test('should render EditExpensePage correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
	expect(history.push).toHaveBeenCalledWith('/');
	expect(editExpense).toHaveBeenCalledWith(expenses[1].id, expenses[1]);
});

test('shouldhandle removeExpense', () => {
	wrapper.find('button').prop('onClick')();
	expect(history.push).toHaveBeenCalledWith('/');
	expect(removeExpense).toHaveBeenCalledWith({id: expenses[1].id});

});