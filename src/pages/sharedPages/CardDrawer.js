import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { motion } from "framer-motion"
import { useQuery } from 'react-query';
import { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider';
const CardDrawer = ({ toggleDrawer }) => {
    const { user } = useContext(AuthContext)
    console.log(user?.email)
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: [user?.email],
        queryFn: async () => {
            const result = await fetch(`http://localhost:5000/cartproducts/${user?.email}`);
            const data = await result.json()
            return data
        }
    })
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
                {products.map(product => <tr className='flex justify-center items-center my-2 p-2 border-y-2' key={product._id}>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className=" w-20 h-20">
                                    <img src={product?.img} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{product?.name}</div>
                                <div className="text-sm opacity-50">${product?.price}</div>
                            </div>
                        </div>
                    </td>
                    <th>
                        <button className="btn btn-ghost btn-xs">X</button>
                    </th>
                    <div className="divider"></div>
                </tr>)}
            </ul>
        </div>
    );
};
export default CardDrawer;