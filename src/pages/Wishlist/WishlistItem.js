import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const WishlistItem = ({ product, handleDelete }) => {
    const [quantity, setQuantity] = useState(1)
    const price = product?.price * quantity;
    const handleDecreseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }


    return (
        <tr className='h-40'>
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
            <th className='border'>
                <div className='border p-3 flex'>
                    <button onClick={handleDecreseQuantity}>-</button>
                    <div className="divider divider-horizontal"></div>
                    <div>{quantity}</div>
                    <div className="divider divider-horizontal"></div>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
            </th>
            <td className='border'>{price}$</td>
            <th className='border'>
                <button onClick={() => handleDelete(product?.id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>
    );
};

export default WishlistItem;