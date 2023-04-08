import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShopProduct from '../shop/ShopProduct';
import { useState } from 'react';
import QuickViewModal from '../shop/QuickViewModal';

const ProductsType = () => {
    const products = useLoaderData()
    const [quickView, setQuickView] = useState(null)
    return (
        <div className='w-11/12 mx-auto my-10'>
            {
                products?.length ? <div className='grid grid-cols-2 lg:grid-cols-5'>
                    {
                        products?.map(product => <ShopProduct key={product._id} setQuickView={setQuickView} product={product}></ShopProduct>)
                    }
                </div> : <p className='font-bold text-center'>No products to show</p>
            }
            <QuickViewModal quickView={quickView} setQuickView={setQuickView}></QuickViewModal>
        </div>
    );
};

export default ProductsType;