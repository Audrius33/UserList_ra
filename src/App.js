import logo from './logo.svg';
import './App.css';
import AddUser from "../src/Pages/AddUser"
import MainPage from "../src/Pages/MainPage"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="d-flex">
                    <Link className="m-20" to="/">User List</Link>
                    <Link className="m-20" to="/AddUser">Add User</Link>
                </div>

                <Switch>
                    <Route exact path="/">
                        <MainPage/>
                    </Route>
                    <Route path="/AddUser">
                        <AddUser/>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
