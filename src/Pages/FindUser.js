import {useState, useEffect, useRef} from 'react';
import http from "../Plugins/Fetch"
import {useParams} from "react-router-dom";


const FindUser = ({setOneUser}) => {

    const {id} = useParams()
    const emailRef = useRef()

    function getEmail(email) {
        http.get('/updateUser/' + email).then(res => {
            setOneUser(res.user[0])
            console.log(res)
        })
    }

    return (
        <div className="App">
            <div className="m-20">
                <p>Find by email</p>
                <input ref={emailRef} placeholder="find by email" type="text"/>
                <button id={id} onClick={(e) => getEmail(emailRef.current.value)}>Find User</button>
            </div>
        </div>

    );
};

export default FindUser;