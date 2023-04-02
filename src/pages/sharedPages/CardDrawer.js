import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { motion } from "framer-motion"
import { useQuery } from 'react-query';
import { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const CardDrawer = ({ toggleDrawer }) => {
    const { user } = useContext(AuthContext)
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: [user?.email],
        queryFn: async () => {
            const result = await fetch(`http://localhost:5000/cartproducts/${user?.email}`);
            const data = await result.json()
            return data
        }
    })
    const prices = products.map(product => parseInt(product.price) * product.quantity)
    const totalprice = prices.reduce((acc, curr) => acc + curr, 0)
    refetch()
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/cartproduct/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch()
                    return toast.error('Deleted')
                }
            })
    }
    return (
        <div className="drawer-side rounded-sm ">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu bg-base-100 text-base-content">
                <div className='border flex justify-between items-center py-3 shadow-md px-4'>
                    <h5 className='font-semibold'>SHOPPING CART</h5>
                    <motion.label onClick={toggleDrawer} whileHover={{ rotate: 90 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%"
                        }} htmlFor="my-drawer-4" className="drawer-button"><IoMdClose className='w-8 h-8'></IoMdClose></motion.label>
                </div>
                <div className='overflow-auto h-96'>
                    {products.map(product => <div className='flex justify-center items-center my-2 p-2 border-y-2' key={product._id}>
                        <div>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className=" w-20 h-20">
                                        <img src={product?.img} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{product?.name}</div>
                                    <div className="text-sm">Price: ${product?.price}</div>
                                    <div className="text-sm">Quantity: {product?.quantity}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => handleDelete(product?._id)} className="btn btn-ghost btn-xs">X</button>
                        </div>
                    </div>)}
                </div>
                <div className='flex justify-between w-11/12 mx-auto my-2'>
                    <h4 className='font-bold text-lg'>Subtotal:</h4>
                    <p className='font-bold text-lg text-purple-700'>${totalprice}</p>
                </div>
                <div className='w-11/12 mx-auto'>
                    <Link to='/cartitems' className='w-full btn btn-outline rounded-none'>View Cart</Link>
                </div>
            </ul>
        </div>
    );
};
export default CardDrawer;