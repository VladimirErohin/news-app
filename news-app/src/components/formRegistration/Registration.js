import React, {useEffect, useState} from 'react';
import {registration, reg__btn, reg_error} from './Registration.module.css';
import {useDispatch, useSelector} from "react-redux";
import {addUserAC} from "../../reducers/userReducer";
import InputForm from "../input/InputForm";

const Registration = () => {

    const dispatch = useDispatch();

    const [valueName, setName] = useState('');
    const [valueEmail, setEmail] = useState('');
    const [valuePassword, setPassword] = useState('');
    const [userNameDirty, setUserDirty] = useState(false);//состояние отражает были уже input или нет( если мы НЕ БЫЛИ в input(userNameDirty(false)), a если БЫЛИ input(userNameDirty(false)))
    const [emailDirty, setEmailDirty] = useState(false);//состояние отражает были уже input
    const [passwordDirty, setPasswordDirty] = useState(false);//состояние отражает были уже input
    const [userNameError, setUserNameError] = useState('the name cannot be empty');//состояние отражает ошибки
    const [emailError, setEmailError] = useState('the email cannot be empty');//состояние отражает ошибки
    const [passwordError, setPasswordError] = useState('the password cannot be empty');//состояние отражает ошибки
    const [formValid, setFormValid] = useState(false);


    useEffect(() => {
            if (userNameError || emailError || passwordError) {
                setFormValid(false)
            } else {
                setFormValid(true)
            }
        }, [userNameError, emailError, passwordError]
    );

    let newUser = {
        id: Date.now(),
        name: valueName,
        email: valueEmail,
        password: valuePassword,
        isAuth: false
    };

    let onRegistration = () => {

        alert(`welcom ${valueName}`);

        setName('');
        setEmail('');
        setPassword('');
        setFormValid(false);
        dispatch(addUserAC(newUser))
    };

    let onBlurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setUserDirty(true);
                break;
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
        }
    };

    let nameHandler = (name) => {
        setName(name);
        let u = /^[a-zA-Z]{5,9}$/;
        if (!u.test(String(name))) {
            setUserNameError('name must be more than 5 and less 9 letters');
            if (!name) {
                setUserNameError('name cannot be empty')
            }
        } else {
            setUserNameError('')
        }
    };

    let emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('invalid email');
            if (!e.target.value) {
                setEmailError() //setEmailError('email cannot be empty')
            }
        } else {
            setEmailError('')
        }
    };

    let passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('password must be more than 3 and less 8 characters')
            if (!e.target.value) {
                setPasswordError("email cannot be empty")
            }
        } else {
            setPasswordError('')
        }
    };

    return (
        <div>
            <div className={registration}>
                <div><b>Registration</b></div>
                {(userNameDirty && userNameError) && <div className={reg_error}>{userNameError}</div>}
                <InputForm
                    forOnBlur={onBlurHandler}
                    name='name'
                    value={valueName}
                    setValue={nameHandler}
                    type="text" placeholder='name...'
                />
                {(emailDirty && emailError) && <div className={reg_error}>{emailError}</div>}
                <div><input
                    onBlur={(e) => onBlurHandler(e)}
                    name='email'
                    value={valueEmail}
                    onChange={emailHandler}
                    type="text" placeholder='email...'/></div>
                {(passwordDirty && passwordError) && <div className={reg_error}>{passwordError}</div>}
                <div><input
                    onBlur={e => onBlurHandler(e)}
                    name='password'
                    value={valuePassword}
                    onChange={passwordHandler}
                    type="password" placeholder='password...'/></div>
                <div className={reg__btn}>
                    <button disabled={!formValid} onClick={onRegistration} type='submit'>registration</button>
                </div>
            </div>
        </div>
    );
};

export default Registration;

