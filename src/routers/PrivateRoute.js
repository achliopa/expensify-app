import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({ 
	isAuthenticated, 
	component: Component,
	...rest //when destructuring ...rest(orr ...anyrging) contains all the rest that we did not destructure 
}) => (
	<Route {...rest} component={(props)=> (
		isAuthenticated ? (
			<div>
				<Header />
				<Component {...props} />
			</div>
		) : (
			<Redirect to="/" />
		)
	)}/>
);

const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);

// 1. Create PublicRoute (copy PrivateRoute)
// 2. Redirect to /dashboard if logged in
// 3. Render component if not logged in
// 4. Use it for the LoginPage