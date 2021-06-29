import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Spotifier = (params) => {

    const [msg, setMsg] = useState("")
    
    return (
        <div>
            <button onClick={() => {

                axios.get("/api/play")
                    .then(res => {
                        setMsg(res.data.status)
                    }).catch(err => {
                        setMsg(err.response.data.error)
                    });
            }}>Play</button>
            <button onClick={() => {

                axios.get("/api/pause")
                    .then(res => {
                        setMsg(res.data.status)
                    }).catch(err => {
                        setMsg(err.response.data.error)
                    });
            }}>Pause</button>

            <button onClick={params.logout}>Logout</button>

            <p>{msg}</p>
        </div>
    );
};

export default Spotifier;