import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import StoreContext from '../store/Context';

const RoutesPrivate = ({component: Component, ...rest}) => {
    const { token } = useContext(StoreContext)

    return token ? <Outlet /> : <Navigate to="/login" />
} 

export default RoutesPrivate