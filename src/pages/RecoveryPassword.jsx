import React from 'react';
import '../styles/RecoveryPassword.scss';
import { Link } from 'react-router-dom'
const PasswordRecovery = () => {
	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<h1 className="title">Password recovery</h1>
				<p className="subtitle">Inform the email address used to create your account</p>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" className="input input-email" />
					<Link
						type='submit'
						className='primary-button login-button text'
						to={'/send-email'}
					>Confirm</Link>
				</form>
			</div>
		</div>
	);
}

export default PasswordRecovery;
