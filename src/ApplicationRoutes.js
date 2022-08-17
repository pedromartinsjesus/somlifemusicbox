import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage';
import Login from "./components/login";
import PrivateRoutes from './PrivateRoutes';
import MusicPlayer from './components/musicPlayer';


export default function ApplicationRoutes() {


    let authenticated = false


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} exact />
                <Route path="/login" element={<Login />} />
                <Route element={<PrivateRoutes authenticated={authenticated} />} >
                    <Route path="/musicPlayer" element={<MusicPlayer />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}