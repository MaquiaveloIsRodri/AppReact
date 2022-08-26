import React, { useRef } from 'react';
import '@styles/Login.scss';

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="email@email.com" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button
						onClick={handleSubmit}
						className="primary-button login-button">
						Log in
					</button>
					<a href="/password-recovery">Forgot my password</a>
				</form>
				<a
					type='submit'
					className='secondary-button signup-button text'
					href='/sign-up'
					>Sign up</a>
			</div>
		</div >
	);
}

export default Login;