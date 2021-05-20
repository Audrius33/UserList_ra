import {useState} from 'react';
import AddUser from "../Pages/AddUser";
import http from "./../Plugins/Fetch"


const UploadForm = () => {

    const [userName, userNameSet] = useState('')
    const [userAge, userAgeSet] = useState('')
    const [userEmail, userEmailSet] = useState('')
    const [userPassword, userPasswordSet] = useState('')
    const [error, setError] = useState([])



    function upload() {

        const sendToServer = {
            userName,
            userAge,
            userEmail,
            userPassword
        }
        http.post('/addUser', sendToServer).then(res => {
            console.log(res.message)
            setError(res.message)
        })
    }

    return (
        <AddUser
            userNameSet={userNameSet}
            userAgeSet={userAgeSet}
            userEmailSet={userEmailSet}
            userPasswordSet={userPasswordSet}
            upload={upload}
            error={error}
        />
    );
};

export default UploadForm;