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
	<div className="box-layout">
		<div className="box-layout__box">
			<h1 className="box_layout__title">Agileng Expensify</h1>
			<p>It's time to put your expenses under control.</p>
			<button className="button" onClick={startLogin}>Login with Google</button>
		</div>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);