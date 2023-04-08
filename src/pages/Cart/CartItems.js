import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider';
import { useQuery } from 'react-query';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { BiArrowFromLeft } from 'react-icons/bi';

const CartItems = () => {
    const { user } = useContext(AuthContext)
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: [user?.email],
        queryFn: async () => {
            const result = await fetch(`https://accessories-hero-server.vercel.app/cartproducts/${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('ACCESSORIES_HERO-token')}`
                }
            });
            const data = await result.json()
            return data
        }
    })
    if (isLoading) {
        return <p className='text-center font-bold'>Loading....</p>
    }
    const prices = products.map(product => (parseInt(product.price) * product.quantity))
    const totalprice = prices.reduce((acc, curr) => acc + curr, 0)
    refetch()
    return (
        <div>
            <div className='py-24 bg-slate-100'><h1 className='text-6xl font-extrabold text-slate-900 text-center'>My Cart</h1></div>
            <div>
                <div className='w-11/12 mx-auto py-5 px-3 bg-slate-50 mt-10'><Link className='hover:text-red-500' to='/shop'>Continue Shopping <BiArrowFromLeft className='w-6 h-6 inline'></BiArrowFromLeft></Link></div>
                <div className="overflow-x-auto w-11/12 mx-auto my-10">
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
                            {products.map(product => <CartItem key={product._id} product={product} refetch={refetch}></CartItem>)}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='lg:flex justify-end'>
                <div className='w-60 mx-auto lg:w-96 lg:mr-14 items-end'>
                    <h4 className='text-xl font-bold text-gray-900 my-3'>Cart Total</h4>
                    <div className='border'>
                        <div className=' flex justify-between items-center py-2 px-8'>
                            <p className='text-slate-900 font-medium'>Subtotal</p>
                            <p>${totalprice}</p>
                        </div>
                        <hr />
                        <div className=' flex justify-between items-center py-2 px-8'>
                            <p className='text-slate-900 font-medium'>Total</p>
                            <p>${totalprice}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;