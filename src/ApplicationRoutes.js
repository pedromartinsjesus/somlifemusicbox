import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './components/landingPage';
import Login from "./components/login";
import PrivateRoutes from './PrivateRoutes';
import MusicPlayer from './components/musicPlayer';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseConfig from "./firebase";



export default function ApplicationRoutes() {


    const [authenticated, setAuthenticated] = useState(null);

    let auth = getAuth(firebaseConfig);
    let navigate = useNavigate();

    useEffect(() => {
        signed();
    }, [])




    /* Signed controls when app starts. It returns if user is authenticated to firebase or not */
    const signed = () => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                return true

            }
            else {
                return false
            }
        })
    }


    /*Controls the state when user click on sign in button on login page*/
    const handleAuthenticated = (resp) => {
        setAuthenticated(resp);
    }


    useEffect(() => {
        if (authenticated) {
            navigate("/musicplayer")
        }
        else {
            setAuthenticated(false);
        }
    }, [authenticated])


    return (

        <Routes>
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/login" element={<Login handleAuthenticated={handleAuthenticated} />} />
            <Route element={<PrivateRoutes signed={signed} />} >
                <Route path="/musicplayer" element={<MusicPlayer />} />
            </Route>

        </Routes>

    )
}