import React from 'react';

const Product = ({ product, refetch }) => {
    const handleProductAdvertisement = status => {
        fetch(`http://localhost:5000/products/${product?._id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ advertise: status })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
    }
    return (
        <tr className='h-40'>
            <th className='border'>
                <button className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <th className='border'>
                {product?.advertise ? <button onClick={() => handleProductAdvertisement(false)} className='btn btn-xs btn-primary'>Remove</button> : <button onClick={() => handleProductAdvertisement(true)} className='btn btn-xs btn-primary'>Advertise</button>}
            </th>
            <td className='border'>
                <div>
                    <img className='w-40 mx-auto' src={product?.img} alt='' />
                </div>
            </td>
            <td className='border'>
                {product.name}
                <br />
                <span className="badge badge-ghost badge-sm">{product?.type}</span>
            </td>
            <td className='border'>{product?.price}$</td>
        </tr>
    );
};

export default Product;