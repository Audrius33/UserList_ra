import {useState, useEffect, useRef} from 'react';
import http from "../Plugins/Fetch"
import {useParams} from "react-router-dom";


const FindUser = () => {

    const {id} = useParams()
    const [users, setAllUsers] = useState([])

    const emailRef = useRef()

    function getEmail(id) {
        console.log(emailRef.current.value)
        console.log(id)
        let data2 = {
            email: emailRef.current.value
        }

        http.get('/updateUser/' + id, data2).then(res => {
            console.log(res)
            setAllUsers(res)
        })
    }


    return (
        <div className="App">
            <div>
                <p>Find by email</p>
                <input ref={emailRef} placeholder="find by email" type="text"/>
                <button id={id} onClick={(e) => getEmail(emailRef.current.value)}>Find User</button>

            </div>
        </div>

    );
};

export default FindUser;