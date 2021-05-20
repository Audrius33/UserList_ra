import {useState, useEffect, useRef} from 'react';
import http from "../Plugins/Fetch"

const FindUser = () => {

    const [users, setAllUsers] = useState([])

    const userRef = useRef()
    const emailRef = useRef()
    const passRef = useRef()
    const ageRef = useRef()



    const idRef = useRef()
    const key = useRef()
    const value = useRef()

    const textRef = useRef()
    const idTitle = useRef()

    function addKey() {
        console.log(idRef.current.value)
        console.log(key.current.value)
        console.log(value.current.value)
        let data = {
            id: idRef.current.value,
            key: key.current.value,
            value: value.current.value
        }

        http.post('/setNewKey', data)
            .then(res => {
                console.log(res)
                setAllUsers(res)
            })
    }

    function addText() {
        console.log(textRef.current.value)
        console.log(idTitle.current.value)
        let data2 = {
            id: idTitle.current.value,
            title: textRef.current.value
        }
        console.log(data2)
        http.post('/setNewTitle', data2)
            .then(res => {
                console.log(res)
                setAllUsers(res)
            })
    }

    function getEmail(e) {
        console.log(e)
        console.log(textRef.current.value)

        // http.get('/allItems/1').then(res => {
        //     console.log(res)
        //     setAllUsers(res)
        // })
    }

    function getEmail(e) {
        console.log(textRef.target.value)
        console.log(e.target)
        http.get('/getUser/').then(res => {
            console.log(res)
            setAllUsers(res)
        })
    }

    function getLength(e) {
        console.log(e)
        http.get('/length').then(res => {
            console.log(res)
            setAllUsers(res)
        })
    }


    return (
        <div className="App">
            {/*<button onClick={(e) => getId(e.target)}>get by Id</button>*/}
            {/*<button onClick={(e) => getPostId(e.target)}>get by postId</button>*/}
            {/*<button onClick={(e) => getLength(e.target)}>get length</button>*/}
            {/*<div>*/}
            {/*    <p>add New key</p>*/}
            {/*    <input ref={idRef} placeholder="look for id" type="text"/>*/}
            {/*    <input ref={key} placeholder="new key" type="text"/>*/}
            {/*    <input ref={value} placeholder="value" type="text"/>*/}

            {/*    <button onClick={addKey}>change key</button>*/}
            {/*</div>*/}
            <div>
                <p>add text</p>
                <input ref={textRef} placeholder="new title" type="text"/>
                <button onChange={(e) => getEmail(textRef.target.value)}>change text</button>

            </div>
        </div>

    );
};

export default FindUser;