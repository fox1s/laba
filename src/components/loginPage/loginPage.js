import React, {useState} from "react";
import '../../App.css'
import {withRouter} from "react-router-dom";

export const LoginPage = withRouter(({history}) => {
    console.log(history)
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);

    const isLogin = () => {
        if (login === 'admin' && pass === 'admin'){
            history.push('/computer-networks')
        } else {
            setError(true)
        }
    }

    return (
        <div className={'loginDiv'}>
            <div className={'loginForm'}>
                <div>Вхід</div>
                <form action="">
                    <span>Введіть логін</span>
                    <input onChange={(e) => setLogin(e.target.value)} type="text" value={login}/>
                    <span>Введіть пароль</span>

                    <input onChange={(e) => setPass(e.target.value)} type="text" value={pass}/>
                </form>
                {error && <div className={'errorMessage'}>Неправильний пароль або логін</div>}
                <button onClick={() => isLogin()}>Увійти</button>
            </div>
        </div>
    )
})