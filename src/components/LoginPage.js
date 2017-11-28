import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

// export default class LoginPage extends React.Component {
	
// 	onLogin= () => {
//         this.props.history.push('/dashboard');
//     };

// 	render () {
// 		return (
// 		    <div>
// 		        <button onClick={this.onLogin}>Login</button>
// 		    </div>
// 		);
// 	}
// }

export const LoginPage = ({startLogin}) => (
	<div>
		<button onClick={startLogin}>Login</button>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);