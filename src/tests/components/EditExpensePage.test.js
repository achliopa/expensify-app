import React from 'react';
import { EditExpensePage } from '../../components/EditExpensePage';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
	startEditExpense = jest.fn();
	startRemoveExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage 
			startEditExpense={startEditExpense} 
			startRemoveExpense={startRemoveExpense} 
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
	expect(startEditExpense).toHaveBeenCalledWith(expenses[1].id, expenses[1]);
});

test('should handle removeExpense', () => {
	wrapper.find('button').prop('onClick')();
	expect(history.push).toHaveBeenCalledWith('/');
	expect(startRemoveExpense).toHaveBeenCalledWith({id: expenses[1].id});

});