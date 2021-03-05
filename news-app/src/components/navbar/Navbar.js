import React from 'react';
import {navbar, nav__news, nav__fieldSearch,nav__registration} from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SearchInput from "../searchInput/SearchInput";
import {useDispatch} from "react-redux";
import {getNews} from "../../actions/news";

const Navbar = () => {

    const dispatch=useDispatch();

    let onNews=()=>{
        dispatch(getNews())
    }

    return (
        <div className={navbar}>
            <div className={nav__news}><NavLink to="/news"><span onClick={onNews}>NEWSapp</span></NavLink></div>
            <div className={nav__fieldSearch}>
                <SearchInput/>
            </div>
            <div className={nav__registration}><NavLink to="/registration">Registration</NavLink></div>
            <div className={nav__registration}><NavLink to="/login">Login</NavLink></div>
            <div className={nav__registration}><NavLink to="/authors">Authors</NavLink></div>
        </div>
    );
};

export default Navbar;