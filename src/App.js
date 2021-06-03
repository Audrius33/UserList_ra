import logo from './logo.svg';
import './App.css';
import UploadForm from "./Components/UploadForm";
import MainPage from "../src/Pages/MainPage"
import FindUser from "./Pages/FindUser";
import UpdateUser from "./Pages/updateUser";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React, {useState} from 'react';

function App() {

    const [oneUser, setOneUser] = useState([])

    return (
        <Router>
            <div className="App">
                <div className="d-flex">
                    <Link className="m-20" to="/">User List</Link>
                    <Link className="m-20" to="/AddUser">Add User</Link>
                    <Link className="m-20" to="/FindUser">Find User</Link>
                </div>

                <Switch>
                    <Route exact path="/">
                        <MainPage/>
                    </Route>
                    <Route path="/AddUser">
                        <UploadForm/>
                    </Route>
                    <Route path="/FindUser">
                        <FindUser setOneUser={setOneUser}/>
                        <UpdateUser oneUser={oneUser}/>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
