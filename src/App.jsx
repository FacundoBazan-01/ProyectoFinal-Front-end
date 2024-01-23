import Footer from "./components/Footer";
import NavbarC from "./components/NavbarC";
<<<<<<< HEAD
import ErrorPage from "./pages/ErrorPage";
=======
import Error404Page from "./pages/Error404Page";
>>>>>>> 733cde5ee462eadee553e4a113538f0e9803eeef
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductoPage from "./pages/ProductoPage";

const App = () => {
	return (
		<>
			<NavbarC />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/producto' element={<ProductoPage />} />
					<Route path='*' element={<Error404Page />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);

};
export default App;
