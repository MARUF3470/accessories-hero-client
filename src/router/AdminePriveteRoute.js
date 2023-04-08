import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import { useQuery } from 'react-query';
import { Navigate, useLocation } from 'react-router-dom';

const AdminePriveteRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    const { data: suser = [], isLoading, refetch } = useQuery({
        queryKey: ['adminPrivateRoute', user?.email],
        queryFn: async () => {
            const result = await fetch(`https://accessories-hero-server.vercel.app/users/${user?.email}`)
            const data = await result.json()
            return data
        }
    })
    console.log(suser)
    if (loading) {
        return <p className='text-center font-bold'>Loading....</p>
    }
    if (isLoading) {
        return <p className='text-center font-bold'>Loading....</p>
    }
    if (suser?.role) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminePriveteRoute;