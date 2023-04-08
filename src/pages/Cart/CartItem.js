import React from 'react';
import { toast } from 'react-hot-toast';
const CartItem = ({ product, refetch }) => {
    const price = product?.price * product.quantity;
    const handleDecreseQuantity = () => {
        const quantity = parseInt(product?.quantity)
        if (quantity > 1) {
            const newQuantity = quantity - 1
            fetch(`https://accessories-hero-server.vercel.app/cartproduct/${product?._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    quantity: newQuantity,
                })
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                })
        }
    }
    const handleIncreseQuantity = () => {
        const quantity = parseInt(product?.quantity)
        const newQuantity = quantity + 1
        fetch(`https://accessories-hero-server.vercel.app/cartproduct/${product?._id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                quantity: newQuantity,
            })
        })
            .then(res => res.json())
            .then(data => {
                refetch()
            })
    }
    const handleDelete = () => {
        fetch(`https://accessories-hero-server.vercel.app/cartproduct/${product?._id}`, {
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
                    <div>{product.quantity}</div>
                    <div className="divider divider-horizontal"></div>
                    <button onClick={handleIncreseQuantity}>+</button>
                </div>
            </th>
            <td className='border'>{price}$</td>
            <th className='border'>
                <button onClick={handleDelete} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>
    );
};

export default CartItem;