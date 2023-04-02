import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import { BiSearch } from 'react-icons/bi';
import { AiOutlineArrowDown } from 'react-icons/ai'
import { useQuery } from 'react-query';
import ShopProduct from './ShopProduct';
const Shop = () => {
    const [BrandsMenu, setBrandsMenu] = useState(false)
    const [quickView, setQuickView] = useState(null)
    const handleClose = event => {
        setQuickView(null)
    }
    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const result = await fetch('http://localhost:5000/products')
            const data = await result.json()
            return data
        }
    })
    return (
        <div className='w-11/12 mx-auto grid lg:grid-cols-4 gap-2'>
            <div className='h-screen'>
                <div>
                    <motion.div onClick={() => setBrandsMenu(!BrandsMenu)}><h4 className='text-lg'>Brands <AiOutlineArrowDown className='inline'></AiOutlineArrowDown></h4></motion.div>
                    <hr />
                    <AnimatePresence>
                        {BrandsMenu && (
                            <motion.div layoutId={BrandsMenu}>
                                <form>
                                    <div className="relative">
                                        <input style={{ color: 'black' }} type="search" id="default-search" className="block rounded-none w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Brand" required />
                                        <button type="submit" className=" text-lg rounded-none absolute right-2.5 bottom-2.5 text-black font-medium px-4 py-2"><BiSearch></BiSearch></button>
                                    </div>
                                </form>
                                <div className="form-control mt-2">
                                    <label className=" flex items-center gap-3 cursor-pointer">
                                        <input type="checkbox" className="checkbox checkbox-primary rounded-none" />
                                        <span className="label-text">Apple</span>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className=" flex items-center gap-3 cursor-pointer">
                                        <input type="checkbox" className="checkbox checkbox-primary rounded-none" />
                                        <span className="label-text">Samsung</span>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className=" flex items-center gap-3 cursor-pointer">
                                        <input type="checkbox" className="checkbox checkbox-primary rounded-none" />
                                        <span className="label-text">Sony</span>
                                    </label>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
            <div className='col-span-3'>
                {
                    products?.map(product => <ShopProduct key={product._id} product={product} refetch={refetch} setQuickView={setQuickView}></ShopProduct>)
                }
            </div>
            {
                quickView && <div>
                    <input type="checkbox" id="booking-modal" className="modal-toggle" />
                    <div className="modal ">
                        <div className="modal-box relative rounded-sm w-11/12 max-w-6xl">
                            <label htmlFor="booking-modal" onClick={() => handleClose()} className="btn btn-sm rounded-sm btn-outline absolute right-2 top-2">✕</label>
                            <h5 className="text-xl"><strong>{quickView.name}</strong></h5>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Shop;