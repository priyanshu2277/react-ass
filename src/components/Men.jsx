import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "../stylesheets/women.scss";

const Men = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://fakestoreapi.com/products/category/men's clothing"
				);

				// console.log("Data:", response.data);
				setProducts(response.data);
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchData(); // Call the async function
	}, []);
	return (
		<div>
			<div className="women_products">
				{products &&
					products.map((product) => (
						<div key={product.id} className="card">
							<Card product={product} category="men" />
						</div>
					))}
			</div>
		</div>
	);
};

export default Men;
