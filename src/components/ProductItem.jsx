import React , {useContext} from 'react';
import AppContext from '../context/AppContext';
import '@styles/ProductItem.scss';
import add from '@icons/bt_add_to_cart.svg'

const ProductItem = ({product}) => {
	const {addToCard} = useContext(AppContext)
	const handleClick=(item)=>{
		addToCard(item)
	}
	return (
		<div className="ProductItem">
			<img src={product.image} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure
				onClick={()=>handleClick(product)}
				>
					<img 
					src={add} 
					alt="AddItem" 
					className='Product-add-icon'
					/>
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
