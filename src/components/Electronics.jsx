import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "../stylesheets/women.scss";

const Electronics = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://fakestoreapi.com/products/category/electronics"
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
							<Card product={product} category="electronics" />
						</div>
					))}
			</div>
		</div>
	);
};

export default Electronics;
