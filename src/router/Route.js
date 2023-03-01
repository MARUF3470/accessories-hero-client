import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import ProductsType from "../pages/Products/ProductsType";
import Login from "../pages/Register/Login";
import Wishlist from "../pages/Wishlist/Wishlist";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/category/:id',
                element: <ProductsType></ProductsType>
            },
            {
                path: '/wishlist',
                element: <Wishlist></Wishlist>
            }
        ]
    }
])
export default router