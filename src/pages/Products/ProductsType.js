import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShopProduct from '../shop/ShopProduct';

const ProductsType = () => {
    const products = useLoaderData()
    return (
        <div className='w-11/12 mx-auto my-10'>
            {
                products?.length ? <div className='grid grid-cols-4'>
                    {
                        products?.map(product => <ShopProduct key={product._id} product={product}></ShopProduct>)
                    }
                </div> : <p className='font-bold text-center'>No products to show</p>
            }
        </div>
    );
};

export default ProductsType;