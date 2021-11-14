import logo from './img/Cybersecurity-PNG-Photos.png';
import React, {Component} from 'react';
import {Layout} from "./components/layout/Layout";
import './App.css';
import {BrowserRouter as Router, Link, Redirect, Route, Switch,} from 'react-router-dom';
import {corporateNetwork, globalNetwork, localNetwork, privateNetwork} from "./DB";
import MainLayout from "./mainlayout";
import {LoginPage} from "./components/loginPage/loginPage";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/"><Redirect to={"/login"}/></Route>
                    <Route path={'/login'} render={() => <LoginPage/>}/>
                    <Route path={'/computer-networks'} render={() => <MainLayout/>}/>
                </Switch>

            </Router>
        );
    }
}

export default App;
