import NavbarC from "./components/NavbarC";
import Error404Page from "./pages/Error404Page";
import FavPage from "./pages/FavPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductoPage from "./pages/ProductoPage";
import CarritoPage from "./pages/CarritoPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import FooterC from "./components/FooterC";
import UsersAdminPage from "./pages/UsersAdminPage";
import ProductsAdminPage from "./pages/ProductsAdminPage";
import AdminPage from "./pages/AdminPage";

const App = () => {
    return (
        <BrowserRouter>
            <NavbarC />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='*' element={<Error404Page />} />
                <Route path='/fav' element={<FavPage />} />
                <Route path='/producto/:id' element={<ProductoPage />} />
                <Route path='/cart' element={<CarritoPage />} />
                <Route path='/usuario' element={<UserPage />} />
                <Route path='/AdminUser' element={<UsersAdminPage />} />
                <Route path='/AdminProduct' element={<ProductsAdminPage />} />
				<Route path='/Admin' element={<AdminPage/>} />
            </Routes>
            <FooterC/>
        </BrowserRouter>
    );
};
export default App;
