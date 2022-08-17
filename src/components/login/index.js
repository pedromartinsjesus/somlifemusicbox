import React from 'react';
import "../../assetsLogin/css/styles.css";
import "../../assetsLogin/css/Google-Style-Login.css";


export default function Login() {

    return (

        <>
            {/* link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">*/}

            < div className="login-card" >
                <img src="/assetsLogin/img/avatar_2x.png" className="profile-img-card" alt="profile card" />
                <p className="profile-name-card"> </p>

                <form className="form-signin"><span className="reauth-email"> </span>
                    <input className="form-control" type="email" required="" placeholder="Email" autofocus="" id="inputEmail" />
                    <input className="form-control" type="password" required="" placeholder="Senha" id="inputPassword" />
                    <div className="checkbox"></div>
                    <button className="btn btn-primary btn-block btn-lg btn-signin" type="submit">Entrar</button>

                </form>

            </div >

        </>
    )

}