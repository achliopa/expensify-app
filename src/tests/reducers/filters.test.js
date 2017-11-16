import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup defualt filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
	    sortBy: 'date',
	    startDate: moment().startOf('month'),
	    endDate: moment().endOf('month')
    });
});

test('should set sort by amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sort by date', () => {
    const currentState = {
        text: '',
	    sortBy: 'amount',
	    startDate: moment().startOf('month'),
	    endDate: moment().endOf('month')
    };
    const action = {
        type: 'SORT_BY_DATE'
    }
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, { 
        type: 'SET_TEXT_FILTER',
        text: 'bill'
        });
    expect(state.text).toBe('bill');
});


test('should set startDate filter', () => {
    const startDate = moment();
    const state = filtersReducer(undefined, { 
        type: 'SET_START_DATE',
        startDate
        });
    expect(state.startDate).toBe(startDate);
});

test('should set endDate filter', () => {
    const endDate = moment();
    const state = filtersReducer(undefined, { 
        type: 'SET_END_DATE',
        endDate
        });
    expect(state.endDate).toBe(endDate);
});