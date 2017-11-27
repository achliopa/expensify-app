import { login, logout } from '../../actions/auth';

test('should setup login action object with proper value', () => {
	const uid = '123abc'
	const action = login(uid);
	expect(action).toEqual({
		type: 'LOGIN',
		uid
	});
});

test('should setup logout action object with proper value', () => {
	const action = logout();
	expect(action).toEqual({
		type: 'LOGOUT',
	});
});