import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';


export default function ApplicationRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} exact />

            </Routes>
        </BrowserRouter>
    )
}