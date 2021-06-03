import React, {useRef, useState} from 'react';


function AddUser ({userNameSet, userAgeSet, userEmailSet,userPasswordSet, upload, error}) {


    const userNameRef = useRef()
    const userAgeRef = useRef()
    const userEmailRef = useRef()
    const passwordRef = useRef()

    return (
        <div className="uploadForm">

            <input ref={userNameRef} type="text" onChange={(e) => userNameSet(e.target.value)} placeholder="username"/>
            <input ref={userAgeRef} onChange={(e) => userAgeSet(e.target.value)} type="number" placeholder="user age"/>
            <input ref={userEmailRef} onChange={(e) => userEmailSet(e.target.value)} type="text" placeholder="email address"/>
            <input ref={passwordRef} onChange={(e) => userPasswordSet(e.target.value)} type="password" placeholder="type password"/>
            <div className="largeButton" onClick={upload}>Add User</div>
            <div>{error}</div>
        </div>

    );
}

export default AddUser;