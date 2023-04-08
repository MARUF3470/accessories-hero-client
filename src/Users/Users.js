import React from 'react';
import { BiArrowFromLeft } from 'react-icons/bi';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import User from './User';

const Users = () => {
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await fetch('https://accessories-hero-server.vercel.app/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('ACCESSORIES_HERO-token')}`
                }
            })
            const data = await result.json();
            return data
        }
    })
    return (
        <div>
            <div className='py-24 bg-slate-100'><h1 className='text-6xl font-extrabold text-slate-900 text-center'>Users</h1></div>
            <div className='w-11/12 mx-auto py-5 px-3 bg-slate-50 mt-10'><Link className='hover:text-red-500' to='/myproducts'>See Your Products <BiArrowFromLeft className='w-6 h-6 inline'></BiArrowFromLeft></Link></div>
            <div>
                <div className="overflow-x-auto w-11/12 mx-auto my-4">
                    <table className="table w-full">
                        <thead>
                            <tr >
                                <th className='rounded-none border bg-transparent'>Image</th>
                                <th className='border bg-transparent'>Name</th>
                                <th className='border bg-transparent'>Role</th>
                                <th className='rounded-none border bg-transparent'>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => <User key={user.id} user={user} refetch={refetch} ></User>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;