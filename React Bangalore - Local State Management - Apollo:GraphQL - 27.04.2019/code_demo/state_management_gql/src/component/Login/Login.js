import React from 'react';
import './Login.css'
import { ApolloConsumer } from 'react-apollo';
const Login = () => {
	return (
		<ApolloConsumer>
			{client => (
				<div 
					className="login-container" 
					onClick={() => client.writeData({ data: { isLoggedIn: true } })} >
					<div className="login-btn">Login</div>
				</div>
			)}
		</ApolloConsumer>

	)
}

export default Login;