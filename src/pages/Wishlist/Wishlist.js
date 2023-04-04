import React from 'react';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../Authentication/AuthProvider';
import { BiArrowFromLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import WishlistItem from './WishlistItem';
import { toast } from 'react-hot-toast';

const Wishlist = () => {
    const products = JSON.parse(localStorage.getItem('myWishlist'));
    console.log(products)
    const handleDelete = (id) => {
        const updatedArray = products.filter(product => product.id !== id)
        localStorage.setItem("myWishlist", JSON.stringify(updatedArray));
        window.location.reload()
        toast.error('Removed')
    }
    return (
        <div>
            <div className='py-24 bg-slate-100'><h1 className='text-6xl font-extrabold text-slate-900 text-center'>Wishlist</h1></div>
            <div className='w-11/12 mx-auto py-5 px-3 bg-slate-50 mt-10'><Link className='hover:text-red-500' to='/shop'>Continue Shopping <BiArrowFromLeft className='w-6 h-6 inline'></BiArrowFromLeft></Link></div>
            <div>
                {products.length ? <div className="overflow-x-auto w-11/12 mx-auto my-4">
                    <table className="table w-full">
                        <thead>
                            <tr >
                                <th className='rounded-none border bg-transparent'>Image</th>
                                <th className='border bg-transparent'>Product</th>
                                <th className='rounded-none border bg-transparent'>Quantity</th>
                                <th className='border bg-transparent'>Price</th>
                                <th className='rounded-none border bg-transparent'>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => <WishlistItem key={product.id} product={product} handleDelete={handleDelete} ></WishlistItem>)}
                        </tbody>
                    </table>
                </div> : <p className='text-center font-bold my-9'>No Product is in your wishlist</p>}
            </div>
        </div>
    );
};

export default Wishlist;