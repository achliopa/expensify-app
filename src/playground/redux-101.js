import  { createStore } from 'redux';


// Action Generators = function that return action objects

// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

// simplified with destructuring
// passing an object, if there is no object we pass an empty object
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});



const setCount = ({count}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers

const countReducer = (state = {count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
           return {
                // count: state.count + incrementBy
                count: state.count + action.incrementBy
           }; 
        case 'DECREMENT':
            //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                //count: state.count - decrementBy
                count: state.count - action.decrementBy
           };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
           };  
        default:
           return state;  
    }
};

const store =  createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// increment the count

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({
    incrementBy: 5
}));

// store.dispatch({
//     type: 'INCREMENT'
// });

store.dispatch(incrementCount());

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(decrementCount({
    decrementBy: 10
}));

// store.dispatch({
//     type: 'DECREMENT'
// });

store.dispatch(decrementCount());

// store.dispatch({
//     type: 'SET',
//     count: 101
// });

store.dispatch(setCount({
    count: 101
}));

// store.dispatch({
//     type: 'RESET'
// });

store.dispatch(resetCount());

unsubscribe();