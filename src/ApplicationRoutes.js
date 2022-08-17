import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage';
import Login from "./components/login";


export default function ApplicationRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} exact />
                <Route path="/login" element={<Login />} />

            </Routes>
        </BrowserRouter>
    )
}