import React from 'react';
import { toast } from 'react-hot-toast';

const User = ({ user, refetch }) => {
    const handleDelete = (id) => {
        fetch(`https://accessories-hero-server.vercel.app/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    refetch()
                    return toast.error('User Deleted')
                }
            })
    }
    const handleMakeAdmin = (id) => {
        console.log(id)
        fetch(`https://accessories-hero-server.vercel.app/users/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ role: 'Admin' })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    refetch()
                    return toast.success('User Updated to Admin')
                }
            })

    }
    return (
        <tr className='h-40'>
            <td className='border'>
                <div>
                    <img className='w-40 mx-auto' src={user?.img} alt='' />
                </div>
            </td>
            <td className='border'>
                {user.name}
                <br />
                <span className="badge badge-ghost badge-sm">{user?.email}</span>
            </td>

            <td className='border'>
                {user?.role === 'Admin' ? "Admin" : <button onClick={() => handleMakeAdmin(user?._id)} className='btn btn-xs btn-outline rounded-none'>Update To Admin</button>}

            </td>
            <th className='border'>
                <button onClick={() => handleDelete(user?._id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>
    );
};

export default User;