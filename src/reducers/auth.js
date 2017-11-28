
// could pass uid as state but passing an object gives flexibility to add more things later on
export default (state = {}, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				uid: action.uid
			};
		case 'LOGOUT':
			return {};
		default:
			return state;
	}
};