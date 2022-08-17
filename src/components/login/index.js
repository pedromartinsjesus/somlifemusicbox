import React from 'react';
import "../../assetsLogin/css/styles.css";
import "../../assetsLogin/css/Google-Style-Login.css";


export default function Login() {


    const handleLogin = (e) => {
        e.preventDefault();
        console.log("hangleLogin");
    }

    return (
        < div className="login-card" >
            <img src="/assetsLogin/img/avatar_2x.png" className="profile-img-card" alt="profile card" />
            <p className="profile-name-card"> </p>

            <form className="form-signin"><span className="reauth-email"> </span>
                <input className="form-control" type="email" required="" placeholder="Email" autoFocus="" id="inputEmail" />
                <input className="form-control" type="password" required="" placeholder="Senha" id="inputPassword" />
                <div className="checkbox"></div>
                <button className="btn btn-primary btn-block btn-lg btn-signin" onClick={handleLogin}>Entrar</button>
            </form>
        </div >
    )

}