import './App.css';
import Navbar from "../navbar/Navbar";
import News from "../news/News";
import Registration from "../formRegistration/Registration";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "../formLogin/Login";
import Authors from "../author/Authors";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <div className="wrap">
                    <Switch>
                        <Route path="/news" component={News}/>
                        <Route path="/registration" component={Registration}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/authors" component={Authors}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
