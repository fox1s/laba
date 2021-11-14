import React, {useEffect} from "react";
import '../network-characteristic/NetworkCharacteristic.css'
import {withRouter} from "react-router-dom";

export const NormativeSecurity = withRouter(({match, data, historyLifting}) => {
    useEffect(() => {
        historyLifting(match)
    })
    return (
        <div>
            <div className={'titleMain'}>
                Нормативне забезпечення
            </div>

            {
                data.map((value, index) =>
                    <div key={index}>
                        <div className={'titleOfValue'}>{value.title}</div>
                        <div className={'describeCharacteristic'}>{value.value}</div>
                        <hr/>
                    </div>
                )
            }

        </div>
    )
})

