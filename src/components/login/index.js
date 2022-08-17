import React, { useState } from 'react';
import "../../assetsLogin/css/styles.css";
import "../../assetsLogin/css/Google-Style-Login.css";

import { getAuth, signInWithEmailAndPassword as signInUser } from 'firebase/auth';
import firebaseConfig from '../../firebase';


export default function Login({ handleAuthenticated }) {

    let auth = getAuth(firebaseConfig);

    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");




    const handleLogin = (e) => {
        e.preventDefault();
        signInUser(auth, email, password)
            .then((userCredential) => {
                handleAuthenticated(true);
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