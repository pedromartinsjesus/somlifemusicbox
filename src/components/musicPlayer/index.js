import React from 'react';
import "./musicplayer.css";


export default function MusicPlayer() {

    let songArray =
        [
            {
                title: 'Vem comigo',
            },
            {
                title: "No silencio da noite"
            }
        ]



    let number = 0;
    const listMusic = () => {

        return (
            songArray.map(function (song) {

                number++
                return (
                    < div key={number} className='list' >
                        <div className='rank'><span>{number}</span></div>
                        <div className='creator'>
                            <h6>{song.title}</h6>
                        </div>
                    </div >
                )
            })
        )


    }


    return (
        <div className='mainDiv'>
            <div className='containerDiv'>

                {listMusic()}

            </div>
        </div>
    )

}