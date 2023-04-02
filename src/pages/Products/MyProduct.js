import React from 'react';
import { useQuery } from 'react-query';
import Product from './Product';

const MyProducts = () => {
    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: 'products',
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products')
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <div className='py-24 bg-slate-100'><h1 className='text-6xl font-extrabold text-slate-900 text-center'>My Products</h1></div>
            <div>
                <div className="overflow-x-auto w-11/12 mx-auto my-10">
                    <table className="table w-full">
                        <thead>
                            <tr >
                                <th className='rounded-none border bg-transparent'>Delete</th>
                                <th className='rounded-none border bg-transparent'>Advertisement</th>
                                <th className='rounded-none border bg-transparent'>Image</th>
                                <th className='border bg-transparent'>Product</th>
                                <th className='border bg-transparent'>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => <Product key={product._id} product={product} refetch={refetch}></Product>)}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyProducts;