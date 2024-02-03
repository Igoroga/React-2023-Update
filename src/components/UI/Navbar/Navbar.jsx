import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from '../../../context';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const exit = event => {
        event.preventDefault();
        setIsAuth(false)
        localStorage.removeItem('auth')
    }


    return (
        <div className='navbar'>
<div className='navbar__links'>
    <Link className='links' to='/about'>About Site</Link>
    <Link className='links' to='/posts'>Posts</Link>
    <MyButton onClick={exit}>Exit</MyButton>
</div>
        </div>
    );
};

export default Navbar;
