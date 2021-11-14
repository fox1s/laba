import React, {useEffect} from "react";
import './NetworkCharacteristic.css'
import {withRouter} from "react-router-dom";

export const NetworkCharacteristic = withRouter(({match, data, historyLifting}) => {
    useEffect(() => {
        historyLifting(match)
    })
    return (
        <div>
            <div className={'titleMain'}>
                Характеристика мережі
            </div>
            <div className={'titleOfValue'}>
                Середовище поширення інформації у КМ
            </div>

            <div className={'describeCharacteristic'}>
                {data.environmentOfShare.map((value, index) => <div key={index}>{value}</div>)}
            </div>
            <div className={'titleOfValue'}> Розміщення даних</div>
            <div className={'describeCharacteristic'}>
                {data.dataPlacement.map((value, index) => <div key={index}>{value}</div>)}
            </div>
        </div>
    )
})

