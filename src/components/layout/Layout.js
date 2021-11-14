import React, {useEffect, useState} from 'react';
import './Layout.css'

import {Link, Route, Switch, withRouter} from 'react-router-dom';
import {NetworkCharacteristic} from "../network-characteristic/NetworkCharacteristic";
import {AttackAndThreads} from "../attack/attack";
import {NormativeSecurity} from "../normativeSecurity/normativeSecurity";


export const Layout = withRouter(({match: {url}, data, title}) => {
    const [chosenBtn, setChosenBtn] = useState('');
    // console.log('render', match)
    // console.log(url)
    // useEffect(() => {
    //     // console.log(url.slice(1))
    //     // setChosenBtn(url.slice(1))
    //     // return () => {
    //     //     setChosenBtn('')
    //     // }
    // }, [chosenBtn])

const historyLifting = (match) => {
    console.log(match.url.split('/')[2])
    setChosenBtn(match.url.split('/')[2])
}
    return (
        <div>

            <div className={'title-div'}>
                <span className={'title-text'}>{title}</span>
            </div>
            <div className={'body-div'}>
                <div style={{margin: '20px 0 20px 0'}}>
                    <b>Об'єкт:</b>
                    {
                        data.object.map((value, index) => <div key={index}>{value}</div>)
                    }


                </div>
                <div className={'btnsWrapper'}>
                    <Link to={`${url}/network-characteristic`}>
                        <button className={chosenBtn === 'network-characteristic' ? 'active' : 'notActive'}
                                onClick={() => setChosenBtn('network-characteristic')}
                        >Характеристика мережі
                        </button>
                    </Link>
                    <Link to={`${url}/attack`}>
                        <button className={chosenBtn === 'attack' ? 'active' : 'notActive'}
                                onClick={() => setChosenBtn('attack')}
                        >Види атак
                        </button>
                    </Link>
                    <Link to={`${url}/threats`}>
                        <button className={chosenBtn === 'threats' ? 'active' : 'notActive'}
                                onClick={() => setChosenBtn('threats')}
                        >Види загроз
                        </button>
                    </Link>
                    <Link to={`${url}/normative-security`}>
                        <button className={chosenBtn === 'normative-security' ? 'active' : 'notActive'}
                                onClick={() => setChosenBtn('normative-security')}
                        >Нормативне забезпечення
                        </button>
                    </Link>
                </div>


                <Switch>
                    <Route path={`${url}/network-characteristic`} render={(props) => {
                        return <NetworkCharacteristic data={data.networkCharacteristic} historyLifting={historyLifting}/>
                    }}/>
                    <Route path={`${url}/attack`} render={(props) => {
                        return <AttackAndThreads data={data.attacks} title={'attacks'} historyLifting={historyLifting}/>
                    }}/>
                    <Route path={`${url}/threats`} render={(props) => {
                        return <AttackAndThreads data={data.threads} title={'threads'} historyLifting={historyLifting}/>
                    }}/>
                    <Route path={`${url}/normative-security`} render={(props) => {
                        return <NormativeSecurity data={data.normativeSecurity} historyLifting={historyLifting}/>
                    }}/>
                </Switch>

            </div>


        </div>);
});