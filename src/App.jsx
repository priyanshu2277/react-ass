import "./App.css";
import Electronics from "./components/Electronics";
import Jewellery from "./components/Jewellery";
import Men from "./components/Men";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Women from "./components/Women";
import StoreContextProvider from "./context/StoreContextProvider";
import Product from "./components/Product";
import Home from "./components/Home";

function App() {
	return (
		<StoreContextProvider>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/electronics" element={<Electronics />} />
					{/* <Route path="/electronics/:id" element={<Jewellery />} /> */}
					<Route path="/jewelery" element={<Jewellery />} />
					<Route path="/:category/:productId" element={<Product />} />
					<Route path="/menclothing" element={<Men />} />
					{/* <Route path="/womenclothing/:id" element={<Women />} /> */}
					<Route path="/womenclothing" element={<Women />} />
				</Routes>
			</BrowserRouter>
		</StoreContextProvider>
	);
}

export default App;
