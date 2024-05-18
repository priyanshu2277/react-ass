/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "../stylesheets/navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import "../stylesheets/cart.scss";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import { useContext, useEffect, useState } from "react";
import StoreContext from "../context/StoreContext";

const handleExit = () => {
	const cart = document.getElementsByClassName("cart")[0];
	// console.log(cart.style[0]);
	if (cart) {
		cart.style.height = "0%";
		cart.style.display = "none";
	}
};

const handleClick = () => {
	const cart = document.getElementsByClassName("cart")[0];
	cart.style.height = "100%";
	cart.style.display = "block";
};
const Navbar = () => {
	const { setProductsCart, productsCart } = useContext(StoreContext);
	const increaseQuantity = (itemId) => {
		setProductsCart((prevItems) =>
			prevItems.map((item) =>
				item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
	};
	const decreaseQuantity = (product) => {
		if (product.quantity === 1) {
			deleteProduct(product.id);
		}
		setProductsCart((prevItems) =>
			prevItems.map((item) =>
				item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
			)
		);
	};
	const deleteProduct = (itemId) => {
		setProductsCart((prevItems) =>
			prevItems.filter((item) => item.id !== itemId)
		);
	};
	const [totalPrice, setTotalPrice] = useState(0);
	useEffect(() => {
		let x = 0;
		productsCart.forEach((product) => {
			x += product.price * product.quantity;
		});
		setTotalPrice(x);
		// console.log(totalPrice);
	}, [productsCart]);
	return (
		<>
			<div className="topnav">
				<Link to="/">Home</Link>
				<Link to="/electronics">Electronics</Link>
				<Link to="/jewelery">Jewelery</Link>
				<Link to="/menclothing">Men's clothing</Link>
				<Link to="/womenclothing">Women's clothing</Link>
				<FaShoppingCart onClick={handleClick} className="topnav__icon" />
				<div className="topnav__quantity">{productsCart.length}</div>
			</div>
			<div className="cart">
				<MdOutlineCancel onClick={handleExit} className="cart__exit" />
				<div className="cart__title">Shopping Bag</div>
				<div className="cart__data">
					{productsCart.length === 0 && (
						<divc className="cart__data--empty">No items in cart</divc>
					)}
					{productsCart &&
						productsCart.map((product) => (
							<div key={product.id} className="cart__container">
								<div className="cart__container--text">
									<div>{product.title.slice(0, 15)}</div>

									<CiCirclePlus
										className="cart__container--plus"
										onClick={() => increaseQuantity(product.id)}
									/>
									<div className="cart__container--quantity">
										{product.quantity}
									</div>
									<CiCircleMinus
										className="cart__container--minus"
										onClick={() => decreaseQuantity(product)}
									/>
									<MdDelete
										className="cart__container--delete"
										onClick={() => deleteProduct(product.id)}
									/>
								</div>
								<div className="cart__container--pricetext">
									RS {product.price.toFixed(0) * product.quantity}
								</div>
							</div>
						))}
					{productsCart.length !== 0 && (
						<>
							<div className="cart__total">
								<div className="cart__total--text">Total</div>
								<div className="cart__total--pricetext">
									RS : {totalPrice.toFixed(0)}
								</div>
							</div>
							<div className="cart__btn">Go to cart</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Navbar;
