import React, { useContext, useState } from 'react';
import { BsCart, BsHeart, BsLink } from 'react-icons/bs';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';
import { toast } from 'react-hot-toast';

const ProductDetails = () => {
    const product = useLoaderData()
    const [quantity, setQuantity] = useState(1)
    const { user } = useContext(AuthContext)
    const handleCartItems = () => {
        const cartItem = {
            email: user.email,
            img: product.img,
            name: product.name,
            type: product.type,
            price: product.price,
            quantity
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
                if (data.acknowledged) {
                    return toast.success('Product added to the cart')
                }
            })
    }
    const handleDecreseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const handleWishList = () => {
        const wishlistProduct = {
            id: product?._id,
            name: product?.name,
            category: product?.category,
            type: product?.type,
            price: product?.price,
            img: product?.img,
        }
        const storedWishlist = JSON.parse(localStorage.getItem("myWishlist"));
        const myArray = storedWishlist || [];
        myArray.push(wishlistProduct);
        localStorage.setItem("myWishlist", JSON.stringify(myArray));
        toast.success('Product added to Wishlist')
    }

    return (
        <div className='w-11/12 mx-auto gap-6 my-10 grid lg:grid-cols-2'>
            <div className='h-[450px]'>
                <img className='w-full h-full' src={product?.img} alt="" />
            </div>
            <div>
                <h4 className='font-semibold text-lg text-zinc-900'>{product?.name}</h4>
                <p className='text-zinc-900 text-sm font-semibold'>Product Type: {product?.type}</p>
                <p className='text-sm my-1'><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quam natus similique dicta delectus voluptatem, minus quos at nobis, quibusdam consequuntur id laudantium! Distinctio facilis optio dignissimos vitae laboriosam fugiat quo laborum odit a, debitis cum itaque natus, labore numquam eum possimus, illum minus nobis repellat earum accusantium. Harum, corporis.</p>
                <p className='text-zinc-900 my-4'>Price: ${product?.price}</p>
                <th className='border mb-8'>
                    <div className='border p-3 flex'>
                        <button onClick={handleDecreseQuantity}>-</button>
                        <div className="divider divider-horizontal"></div>
                        <div>{quantity}</div>
                        <div className="divider divider-horizontal"></div>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                </th>
                <div className='flex items-center gap-2'>
                    <button onClick={handleCartItems} className='btn btn-outline hover:bg-zinc-900 border-1 border-zinc-800 rounded-none mt-4 lg:mt-10'>Add To Cart <BsCart className='ml-1 w-5 h-5'></BsCart></button>
                    <div className='tooltip tooltip-bottom' data-tip="Add To Wishlist">
                        <button onClick={handleWishList} className='btn bg-sky-400 border-sky-400 rounded-none mt-4 lg:mt-10'><BsHeart className='w-6 h-6'></BsHeart> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;