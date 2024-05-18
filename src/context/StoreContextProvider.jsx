/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import StoreContext from "./StoreContext";

const StoreContextProvider = ({ children }) => {
	const [productsCart, setProductsCart] = useState([]);
	return (
		<StoreContext.Provider value={{ productsCart, setProductsCart }}>
			{children}
		</StoreContext.Provider>
	);
};

export default StoreContextProvider;
