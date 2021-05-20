import {useState, useEffect} from 'react';
import http from '../Plugins/Fetch'
import {useParams} from "react-router-dom";


const MainPage = () => {
    const [users, setAllUsers] = useState([])
    const {id} = useParams()

    function removeUser(id) {
        console.log(id)
        http.get('/delUser/' + id).then(res => {
            setAllUsers(res)
        })
    }

    useEffect(() => {

        http.get('/getUsers').then(res => {
            console.log(res)
            setAllUsers(res)
        })
    }, [])


    return (
        <div className="d-flex m-20 f-column">
            {users.map((item, index) =>
                <div className="d-flex f-column bg m-20" key={index}>
                    <p className="d-flex f-column">{item.email}</p>
                    <p> age {item.age}</p>
                    <p>username: {item.username}</p>
                    <p>password: {item.password}</p>
                    <button className="m-10" onClick={() => removeUser(item._id)}>Remove User</button>

                </div>
            )}
        </div>
    );
};

export default MainPage;