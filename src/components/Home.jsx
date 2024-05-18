import { useEffect, useState } from "react";
import "../stylesheets/home.css";
import axios from "axios";
const Home = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await axios.get(`https://fakestoreapi.com/products`);
				setProducts(response.data);
			} catch (error) {
				console.error("Error fetching product:", error);
			}
		};

		fetchProduct();
	}, []);

	return (
		<div>
			<section>
				<div className="section">
					<div className="section1">
						<div className="img-slider">
							{products.map((product) => {
								return (
									<img
										key={product.id}
										src={product.image}
										alt=""
										className="img"
									/>
								);
							})}
						</div>
					</div>
					<div className="section2">
						<div className="container">
							{products.map((product) => {
								return (
									<div key={product.id} className="items">
										<div className="img img1">
											<img src={product.image} alt="" />
										</div>
										<div className="name">{product.title.slice(0, 10)}</div>
										<div className="price">{product.price}</div>
										<div className="info">
											{product.description.slice(0, 25)}
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
