import React from 'react';
import { BsEye, BsHeart, BsLink } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import './AdverticeProduct.css'
import { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider';
import { toast } from 'react-hot-toast';
const AdvertiseProduct = ({ advertiseProduct, refetch, setQuickView }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleCartItems = () => {
        if (user) {
            const cartItem = {
                email: user.email,
                img: advertiseProduct.img,
                name: advertiseProduct.name,
                type: advertiseProduct.type,
                price: advertiseProduct.price,
                quantity: 1,
            }
            fetch('https://accessories-hero-server.vercel.app/cartproducts', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cartItem),
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    if (data.acknowledged) {
                        return toast.success('Product added to the cart')
                    }
                })
        }
        else {
            toast('You need to login first')
            return navigate('/login')
        }

    }
    const handleWishList = () => {
        const wishlistProduct = {
            id: advertiseProduct?._id,
            name: advertiseProduct?.name,
            category: advertiseProduct?.category,
            type: advertiseProduct?.type,
            price: advertiseProduct?.price,
            img: advertiseProduct?.img,
        }
        const storedWishlist = JSON.parse(localStorage.getItem("myWishlist"));
        const myArray = storedWishlist || [];
        myArray.push(wishlistProduct);
        localStorage.setItem("myWishlist", JSON.stringify(myArray));
        toast.success('Product added to Wishlist')
    }
    return (
        <div className="advertiseProduct shadow-md">
            <div className="product-card geek">
                <img src={advertiseProduct?.img} alt="Product" />
                <button onClick={handleCartItems} className="add-to-cart-btn bg-slate-900 text-white font-semibold w-full h-8  hover:bg-red-500">Add to Cart</button>
                <div className='flex flex-col gap-1 mini-buttons'>
                    <div className='tooltip tooltip-left' data-tip="Add To Wishlist">
                        <button onClick={handleWishList} className='p-1 bg-white shadow-sm inline w-8 h-8 hover:bg-red-500 hover:text-white'><BsHeart className='w-6 h-6'></BsHeart> </button>
                    </div>
                    <div className='tooltip tooltip-left' data-tip="Quick View">
                        <label htmlFor="booking-modal" onClick={() => setQuickView(advertiseProduct)} className='btn btn-ghost btn-sm rounded-none px-1'><BsEye className='w-6 h-6'></BsEye></label>
                    </div>
                    <div className='tooltip tooltip-left' data-tip="Product Details">
                        <button className='p-1 bg-white shadow-sm inline w-8 h-8 hover:bg-red-500 hover:text-white'><Link to={`/details/${advertiseProduct?._id}`}><BsLink className='w-6 h-6'></BsLink></Link></button>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <h2 className='font-semibold text-sm'>{advertiseProduct?.name}</h2>
                <p className='font-semibold text-sm'>Price: ${advertiseProduct?.price}</p>
            </div>
        </div>
    );
};

export default AdvertiseProduct;