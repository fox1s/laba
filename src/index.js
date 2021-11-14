import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Redirect, Route, Router, Switch} from "react-router-dom";
import {LoginPage} from "./components/loginPage/loginPage";

// let isAuthorized = false
// if (true) {
//     isAuthorized = true
// }

ReactDOM.render(
    <React.StrictMode>
        {/*<Router>*/}

        {/*        <Switch>*/}
        {/*            <Route exact path="/"><Redirect to={"/login"}/></Route>*/}
        {/*            <Route path={'/login'} render={() => <LoginPage/>}/>*/}
        {/*            /!*<Route path={'/computer-networks'} render={() => <App/>}/>*!/*/}
        {/*        </Switch>*/}

        {/*</Router>*/}
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
