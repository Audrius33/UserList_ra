import {useState} from 'react';
import AddUser from "../Pages/AddUser";
import http from "./../Plugins/Fetch"


const UploadForm = () => {

    const [userName, userNameSet] = useState('')
    const [userAge, userAgeSet] = useState('')
    const [userEmail, userEmailSet] = useState('')
    const [userPassword, userPasswordSet] = useState('')


    function upload() {

        const sendToServer = {
            userName,
            userAge,
            userEmail,
            userPassword
        }
        http.post('/addUser', sendToServer).then(res => {
            console.log(res)
        })
    }

    return (
        <AddUser
            userNameSet={userNameSet}
            userAgeSet={userAgeSet}
            userEmailSet={userEmailSet}
            userPasswordSet={userPasswordSet}
            upload={upload}
        />
    );
};

export default UploadForm;