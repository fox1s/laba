import logo from './logo.svg';
import React, {Component} from 'react';
import AllUsersComponent from "./components/all-users/AllUsersComponent";
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch,} from 'react-router-dom';
import MyContactsComponent from "./components/my-contacts/MyContactsComponent";
import AllPostsComponent from "./components/all-posts/AllPostsComponent";
import AllCommentsComponent from "./components/all-comments/AllCommentsComponent";

class App extends Component {
    render() {
        return (
            <Router>
                <div className={'App'}>
                    <div className="Menu">
                        <div className={'fixed-menu'}>


                            <div className={'title-header'}>
                                {/*<p className={'title'}><Link to={''} className={'title'}>React</Link></p>*/}
                                <Link to={''} className={'title'}>React</Link>
                                <span className={'title-small'}>Homework 5</span>
                                <span>by Smikh Rostyslav</span>
                            </div>
                            <hr className={'title-hr'}/>

                            <div className={'main_div_router'}>
                                <div className={'div_of_link'}>
                                    <Link to={'/users'} className={'links'}>Users</Link>
                                </div>
                                <div className={'div_of_link'}>
                                    <Link to={'/posts'} className={'links'}>Posts</Link>
                                </div>
                                <div className={'div_of_link'}>
                                    <Link to={'/comments'} className={'links'}>Comments</Link>
                                </div>

                                <div className={'logo-div'}>
                                    <img src={logo} className="App-logo" alt="logo"/>
                                </div>
                            </div>
                            <hr className={'contacts-hr'}/>
                            <MyContactsComponent/>
                        </div>
                    </div>

                    <div className={'Body'}>
                        {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                        <Switch>
                            <Route path={'/users'} render={() => <AllUsersComponent/>}/>
                            <Route path={'/posts'} render={() => <AllPostsComponent/>}/>
                            <Route path={'/comments'} render={() => <AllCommentsComponent/>}/>
                        </Switch>

                    </div>

                </div>

            </Router>
        );
    }
}

export default App;
