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
import Users from "../Users/Users";
import PrivateRoute from "./PrivateRoute";
import AdminePriveteRoute from "./AdminePriveteRoute";
import ProductDetails from "../pages/shop/ProductDetails";

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
                path: '/users',
                element: <AdminePriveteRoute><Users></Users></AdminePriveteRoute>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/addproduct',
                element: <AdminePriveteRoute><AddProduct></AddProduct></AdminePriveteRoute>
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
                element: <PrivateRoute><ProductsType></ProductsType></PrivateRoute>,
                loader: ({ params }) => fetch(`https://accessories-hero-server.vercel.app/products/${params.id}`)
            },
            {
                path: '/wishlist',
                element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
            },
            {
                path: '/myproducts',
                element: <AdminePriveteRoute><MyProducts></MyProducts></AdminePriveteRoute>
            },
            {
                path: '/cartitems',
                element: <PrivateRoute><CartItems></CartItems></PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://accessories-hero-server.vercel.app/product/${params.id}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('ACCESSORIES_HERO-token')}`
                    }
                })

            },

        ]
    }
])
export default router