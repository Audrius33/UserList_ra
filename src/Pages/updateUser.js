import React, {useRef, useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import http from "../Plugins/Fetch";


const UpdateUser = ({oneUser}) => {


    const [userUpload, setUserUpload] = useState([])
    const [showBtn, setShowBtn] = useState(false)

    const uploadUser = useRef()
    const uploadAge = useRef()
    const uploadEmail = useRef()
    const uploadPsw = useRef()


    function uploadUserInfo() {

        const sendData = {
            username: uploadUser.current.value,
            age: uploadAge.current.value,
            email: uploadEmail.current.value,
            psw: uploadPsw.current.value,
            id: oneUser._id
        }
        http.post('/oneUserUpdate/user', sendData).then(res => {
            setUserUpload(res)

        })

    }

    function show() {
        setShowBtn(!showBtn)
    }

    return (
        <div className="styleUserCard">
            <p>{oneUser.username}</p>
            <p>{oneUser.age}</p>
            <p>{oneUser.email}</p>
            <p>{oneUser.password}</p>
            <button onClick={show} className="m-20 btnEdit">Edit</button>
            {showBtn ? <div className="styleUserCard">
                <input ref={uploadUser} type="text" placeholder="username"/>
                <input ref={uploadAge} type="number" placeholder="age"/>
                <input ref={uploadEmail} type="text" placeholder="email"/>
                <input ref={uploadPsw} type="text" placeholder="password"/>
                <button onClick={uploadUserInfo}>Edit</button>
            </div> : null}
        </div>

    );
};

export default UpdateUser;