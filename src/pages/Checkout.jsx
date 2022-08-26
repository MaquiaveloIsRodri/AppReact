import React , {useContext} from 'react';
import '../styles/Checkout.scss';
import AppContext from '../context/AppContext';

const Checkout = () => {
	const {state} = useContext(AppContext)
	const day =new Date().getDate()
	const month = new Date().getMonth()
	const year = new Date().getFullYear()
	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>{month + 1}.{day}.{year}</span>
							<span>6 articles</span>
						</p>
						
						<p>$560.00</p>
					</div>
					<button className='primary-button login-button'>To Pay</button>
				</div>
			</div>
		</div>
	);
}

export default Checkout;
