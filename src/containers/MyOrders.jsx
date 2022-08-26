import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';
import AppContext from '../context/AppContext'
import icon from '@icons/flechita.svg'

const MyOrder = () => {
	const { state, clickCloseOrder } = useContext(AppContext)
	const sumTotal = () => {
		const reducer = (accu, value) => accu + value.price
		const sum = state.cart.reduce(reducer, 0)
		return sum
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img
					src={icon} alt="arrow"
					className='title-arrow'
					onClick={() => clickCloseOrder()}
				/>
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{
					state.cart.map(product => {
						return <OrderItem
							product={product}
							key={`orderItem-${product.id}`}
						/>
					})
				}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$ {sumTotal()}</p>
				</div>
				<a
					className="Order-Button"
					href="/checkout"
				>
					Checkout
				</a>
			</div>
		</aside>
	);
}

export default MyOrder;
