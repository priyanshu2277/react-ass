/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import "../stylesheets/card.scss";

import StoreContext from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
function Card({ product, category }) {
	console.log(product, category);
	const navigate = useNavigate();
	const { setProductsCart, productsCart } = useContext(StoreContext);
	const handleClick = () => {
		setProductsCart((prevItems) => {
			const existingItem = prevItems.find((item) => item.id === product.id);
			if (existingItem) {
				return prevItems.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			} else {
				return [...prevItems, { ...product, quantity: 1 }];
			}
		});
	};

	// console.log(productsCart);
	return (
		<div className="card">
			<div
				className="card__img"
				onClick={() => {
					navigate(`/${category}/${product.id}`);
				}}
			>
				<img src={product.image} width={"100%"} height={"100%"} alt="Avatar" />
			</div>

			<div className="card__container">
				<p>{product.title.slice(0, 30)}</p>
				<div className="card__container--price">
					<span className="card__container--pricetext">RS {product.price}</span>

					<button className="card__container--btn" onClick={handleClick}>
						Add To Cart
					</button>
				</div>
			</div>
		</div>
	);
}

export default Card;
