import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './components/landingPage';
import Login from "./components/login";
import PrivateRoutes from './PrivateRoutes';
import MusicPlayer from './components/musicPlayer';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { appConfig } from "./firebase";
import Profile from './components/profile/profile';



export default function ApplicationRoutes() {

    const auth = getAuth(appConfig);
    /*  const [authenticated, setAuthenticated] = useState(null); */



    let navigate = useNavigate();
    const userAuth = auth.currentUser;

    useEffect(() => {
        signed();
    }, [])


    /* Signed controls when app starts. It returns if user is authenticated to firebase or not */
    const signed = () => {


        if (userAuth) {

            return true
        }
        else {

            return false
        }

    }


    /*Controls the state when user click on sign in button on login page*/
    /* const handleAuthenticated = (resp) => {
        setAuthenticated(resp);
    } */


    /*  useEffect(() => {
         if (authenticated) {
 
             navigate(`/musicplayer/${userAuth}`)
         }
         else {
             setAuthenticated(false);
         }
     }, [authenticated]) */


    return (

        <Routes>
            <Route element={<PrivateRoutes signed={true} />} >
                <Route index path="/musicplayer" element={<MusicPlayer />} />
                {/* <Route path="/profile" element={<Profile />} exact /> */}
            </Route>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login /* handleAuthenticated={handleAuthenticated} */ />} />
        </Routes>

    )
}