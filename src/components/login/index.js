import React, { useState, useEffect } from 'react';
import "../../assetsLogin/css/styles.css";
import "../../assetsLogin/css/Google-Style-Login.css";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword as signInUser, onAuthStateChanged } from 'firebase/auth';
import { appConfig } from '../../firebase';




export default function Login() {

    const auth = getAuth(appConfig);
    let navigate = useNavigate();

    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");

    useEffect(() => {
        function checkUser() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    navigate("/musicplayer")
                }
            });
        }

        checkUser()

    }, [])



    const handleLogin = (e) => {
        e.preventDefault();
        signInUser(auth, email, password)
            .then((userCredential) => {
                navigate("/musicplayer");

            })
            .catch((error) => {
                alert("Email ou senha incorretos")
            })
    }

    return (
        < div className="login-card" >
            <img src="/assetsLogin/img/avatar_2x.png" className="profile-img-card" alt="profile card" />
            <p className="profile-name-card"> </p>

            <form className="form-signin"><span className="reauth-email"> </span>
                <input className="form-control" onChange={(e) => setEmail(e.target.value)} type="email" required="" placeholder="Email" autoFocus="" id="inputEmail" />
                <input className="form-control" onChange={(e) => setPassword(e.target.value)} type="password" required="" placeholder="Senha" id="inputPassword" />
                <div className="checkbox"></div>
                <button className="btn btn-primary btn-block btn-lg btn-signin" onClick={handleLogin}>Entrar</button>
            </form>
        </div >
    )

}