import React, { useContext } from 'react';
import { APIContext } from './Contexts';
import { useState, useEffect } from 'react';

const Spotifier = (params) => {
    
    const [playback, setPlayback] = useState({});
    const api = useContext(APIContext);

    const handleError = (err) => {
        console.log(err.statusCode);
        if(err.statusCode == 401){
            // TODO: Refresh token
            console.error("Expired token");
        } else {
            console.error(err.statusCode);
        }
    };

    useEffect(() => {
        api.getMyCurrentPlayingTrack().then(
            data => {setPlayback(data.body); console.log(data.body)},
            handleError
        );
    }, [api]);

    return (
        <div>
            <button onClick={() => {
                api.skipToPrevious().then(data => {}, handleError);
                api.getMyCurrentPlayingTrack().then(
                    data => {setPlayback(data.body); console.log(data.body)},
                    handleError
                );
            }}>Prev</button>

            <button onClick={() => {
                if(playback.is_playing){
                    api.pause().then(data => {}, handleError);
                } else {
                    api.play().then(data => {}, handleError);
                }

                api.getMyCurrentPlayingTrack().then(
                    data => {setPlayback(data.body); console.log(data.body)},
                    handleError
                );
            }}>{playback.is_playing ? "Playing" : "Paused"}</button>

            <button onClick={() => {
                api.skipToNext().then(data => {}, handleError);
                api.getMyCurrentPlayingTrack().then(
                    data => {setPlayback(data.body); console.log(data.body)},
                    handleError
                );
            }}>Next</button>

            <button onClick={params.logout}>Logout</button>
        </div>
    );
};

export default Spotifier;