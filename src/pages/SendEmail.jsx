import React from 'react';
import '../styles/SendEmail.scss'
import icon from '@icons/email.svg'
import { Link } from 'react-router-dom'
const SendEmail = () => {
    return (
        <div className="login">
            <div className="form-container">
                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
                <div className="email-image">
                    <img src={icon} alt="email" />
                </div>
                <Link
					type='submit'
					className='primary-button login-button text'
					to={'/login'}
					>Login</Link>
                <p className="resend">
                    <span>Didn't receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
};

export default SendEmail;