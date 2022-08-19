import React, { useEffect, useState } from 'react';
import "./musicplayer.css";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../firebase";
import { getAuth, onAuthStateChanged } from 'firebase/auth';



export default function MusicPlayer() {


    const [songArray, setSongArray] = useState([]);
    const [userDisplayName, setUserDisplayName] = useState("");

    const auth = getAuth();

    useEffect(() => {

        checkUser();

    }, [])


    const checkUser = () => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserDisplayName(user.displayName);
            } else {

            }
        });
    }


    useEffect(() => {
        getSongs();
    }, [userDisplayName])

    const getSongs = async () => {
        const songsTable = collection(db, "songs");
        const q = query(songsTable, where("singer", "==", userDisplayName));
        const querySnapshot = await getDocs(q);
        const resp = querySnapshot.docs.map((doc) => (doc.data()));
        setSongArray(resp);
    }



    let number = 0;

    const listMusic = () => {
        return (
            songArray.map(function (song) {

                number++
                return (
                    <a target="_blank" rel="noreferrer" href={song.link} key={number} className='list' >
                        <div className='rank' ><span>{number}</span></div>
                        <div className='creator'>
                            <h6>{song.title}</h6>
                        </div>
                    </a >
                )
            })
        )
    }


    return (
        <div className='mainDiv'>
            <div className='containerDiv'>
                <h4 style={{ color: '#fff', fontWeight: 'bolder' }}>{userDisplayName}</h4>
                {listMusic()}

            </div>
        </div>
    )

}