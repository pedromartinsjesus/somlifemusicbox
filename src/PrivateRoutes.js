import React from 'react';

import { Outlet, Navigate } from 'react-router-dom';


export default function PrivateRoutes({ signed }) {

    return (
        signed ? <Outlet /> : <Navigate to="/" />
    )
}