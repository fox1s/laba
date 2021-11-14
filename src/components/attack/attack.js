import React, {useEffect} from "react";
import '../network-characteristic/NetworkCharacteristic.css'
import {withRouter} from "react-router-dom";

export const AttackAndThreads = withRouter(({match, data, title, historyLifting}) => {
    useEffect(() => {
        historyLifting(match)
    })

    return (
        <div>
            <div className={'titleMain'}>
                {title === 'attacks' ? 'Види атак' : 'Види загроз'}
            </div>
            <div>
                {data.map((value, index) =>
                    <div className={'titleOfValue'} key={index + value.title}>
                        <div>{value.title}</div>
                        <br/>
                        <b>
                            Захист:
                        </b>
                        <div className={'describeCharacteristic'}>{value.value.map((value, index) => <div
                            key={index + value}>{value}</div>)}</div>
                        <hr/>
                    </div>
                )}
            </div>

        </div>
    )
})
























