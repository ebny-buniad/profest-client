import React from 'react';
import useAuth from '../hooks/useAuth';
import Spinner from '../Components/Spinner/Spinner';
import { Navigate } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <Spinner></Spinner>
    }

    if (!user) {
        return <Navigate to='/login'></Navigate>;
    }
    return children;
};

export default PrivateRoutes;