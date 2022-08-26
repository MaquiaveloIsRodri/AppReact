import React, { useContext } from 'react';
import '@styles/OrderItem.scss';
import AppContext from '../context/AppContext'
import close from '@icons/icon_close.png'

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext)
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.image} alt="bike" />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img
				src={close}
				alt="close"
				className='order-close-item'
				onClick={() => removeFromCart(product)}
			/>
		</div>
	);
}

export default OrderItem;
