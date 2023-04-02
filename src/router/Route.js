import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About/About";
import CartItems from "../pages/Cart/CartItems";
import Contact from "../pages/contact/Contact";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/Products/AddProduct";
import MyProducts from "../pages/Products/MyProduct";
import ProductsType from "../pages/Products/ProductsType";
import Login from "../pages/Register/Login";
import Register from "../pages/Register/Register";
import Shop from "../pages/shop/Shop";
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
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registretion',
                element: <Register></Register>
            },
            {
                path: '/category/:id',
                element: <ProductsType></ProductsType>
            },
            {
                path: '/wishlist',
                element: <Wishlist></Wishlist>
            },
            {
                path: '/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/cartitems',
                element: <CartItems></CartItems>
            }
        ]
    }
])
export default router