import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import "./profile.css";


export default function Profile() {


    const auth = getAuth();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [fotoLink, setFotoLink] = useState("");

    const handleCadastrar = () => {
        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user

                updateProfileUser(user);
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    const updateProfileUser = (user) => {
        updateProfile(user, {
            displayName: nome,
            photoURL: fotoLink
        })
            .then(() => {
                console.log("Profile Updated")
            })
    }


    return (
        <div className='profile'>
            <div className='formcadastro'>

                Nome: <input onChange={(e) => setNome(e.target.value)} type="text" />
                <br />
                <br />
                Email: <input onChange={(e) => setEmail(e.target.value)} type="email" />
                <br />
                <br />
                Senha: <input onChange={(e) => setSenha(e.target.value)} type="text" />
                <br />
                <br />
                Foto Link: <input onChange={(e) => setFotoLink(e.target.value)} type="text" />
                <br />
                <br />
                <button onClick={handleCadastrar} className='btnCadastrar'>Cadastrar</button>


            </div>
        </div>
    )
}