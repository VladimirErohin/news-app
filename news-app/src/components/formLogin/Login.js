import React, {useState, useEffect} from 'react';
import {reg__btn, registration} from "../formRegistration/Registration.module.css";
import {useDispatch, useSelector} from "react-redux";
import {loginUserAC} from "../../reducers/userReducer";


const Login = () => {

    const [valueEmail, setEmail] = useState('');
    const [valuePassword, setPassword] = useState('');
    const [disBtn, setdisBtn] = useState(true);
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.users.users);


    let checkUser = () => {
        isAuth.map(u => {
            if (u.email === valueEmail && u.isAuth) {
                //if (u.isAuth)
                alert('You are already logged in!!!');
            }
            if (u.email === valueEmail && !u.isAuth) {
                setdisBtn(false) || alert('need log in!!!');
            }
        })
    };


    let onLogin = () => {

        setdisBtn(true);
        setEmail('');
        setPassword('');
        alert('Success!');
        dispatch(loginUserAC(valuePassword));
    };

    return (
        <div>
            <div className={registration}>
                <div><b>Login</b></div>
                <div><input
                    value={valueEmail}
                    name='email'
                    onChange={e => setEmail(e.target.value)}
                    onBlur={checkUser}
                    type="text" placeholder='email...'/>
                </div>
                <div><input
                    value={valuePassword}
                    name='password'
                    onChange={e => setPassword(e.target.value)}
                    type="password" placeholder='password...'/></div>
                <div className={reg__btn}>
                    <button disabled={disBtn} onClick={() => onLogin(valuePassword)}>login</button>
                </div>
            </div>
        </div>
    );


};


export default Login;

// onBlur={checkUser}

//onChange={e => setPassword(e.target.value)}
//onChange={e => passwordHandlerCheck(e)}