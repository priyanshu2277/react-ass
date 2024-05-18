/* eslint-disable no-unused-vars */
// import Card from "./Card";
import { useContext } from "react";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../stylesheets/product.scss";
import StoreContext from "../context/StoreContext";

const Product = () => {
	const { category, productId } = useParams();
	const [product, setProduct] = useState(null);
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
	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await axios.get(
					`https://fakestoreapi.com/products/${productId}`
				);
				setProduct(response.data);
			} catch (error) {
				console.error("Error fetching product:", error);
			}
		};

		fetchProduct();
	}, [productId]);

	if (!product) {
		return <div>Loading...</div>;
	}

	return (
		<div className="product">
			<h1 className="">{product.title}</h1>
			<img className="product__image" src={product.image} alt={product.title} />
			<p className="product__description">{product.description}</p>
			<p className="product__description">Price: ${product.price}</p>
			<button className="card__container--btn" onClick={handleClick}>
				Add To Cart
			</button>
		</div>
	);
};

export default Product;
