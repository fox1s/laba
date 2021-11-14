import logo from './img/Cybersecurity-PNG-Photos.png';
import React, {Component} from 'react';
import {Layout} from "./components/layout/Layout";
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch,} from 'react-router-dom';
import {corporateNetwork, globalNetwork, localNetwork, privateNetwork} from "./DB";

class MainLayout extends Component {
    render() {
        return (
            <Router>
                <div className={'App'}>
                    <div className="Menu">
                        <div className={'fixed-menu'}>


                            <div className={'title-header'}>
                                <Link to={''} className={'title'}>Класифікація атак на комп'ютерні мережі: захист від НСД</Link>

                            </div>
                            <hr className={'title-hr'}/>

                            <div className={'main_div_router'}>
                                <div className={'div_of_link'}>
                                    <Link to={'/global-network'} className={'links'}>Глобальні мережі</Link>
                                </div>
                                <div className={'div_of_link'}>
                                    <Link to={'/local-network'} className={'links'}>Локальні мережі</Link>
                                </div>
                                <div className={'div_of_link'}>
                                    <Link to={'/corporate-network'} className={'links'}>Корпоративні мережі</Link>
                                </div>
                                <div className={'div_of_link'}>
                                    <Link to={'/private-network'} className={'links'}>Приватні мережі</Link>
                                </div>

                                <div className={'logo-div'}>
                                    <img src={logo} className="App-logo" alt="logo"/>
                                </div>
                            </div>
                            <hr className={'contacts-hr'}/>
                            {/*<MyContactsComponent/>*/}
                        </div>
                    </div>

                    <div className={'Body'}>
                        <Switch>
                            <Route path={'/global-network'} render={() => <Layout data={globalNetwork} title={'Глобальні мережі'}/>}/>
                            <Route path={'/local-network'} render={() => <Layout data={localNetwork}  title={'Локальні мережі'}/>}/>
                            <Route path={'/corporate-network'} render={() => <Layout data={corporateNetwork}  title={'Корпоративні мережі'}/>}/>
                            <Route path={'/private-network'} render={() => <Layout data={privateNetwork}  title={'Приватні мережі'}/>}/>
                        </Switch>

                    </div>

                </div>

            </Router>
        );
    }
}

export default MainLayout;
