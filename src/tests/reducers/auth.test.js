import authReducer from '../../reducers/auth';

test('should login user', () => {
    const currentState = {};
    const action = {
        type: 'LOGIN',
        uid: '123abs'
    }
    const state = authReducer(currentState, action);
    expect(state.uid).toBe('123abs');
});

test('should logout user', () => {
    const currentState = {
    	uid: '123abc'
    };
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer(currentState, action);
    expect(state).toEqual({});
});