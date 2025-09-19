import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo.png'

const Logo = () => {
    return (
        <div>
            <Link className='flex items-end' to='/'>
                <img src={logo} alt="" /> <span className='text-3xl font-bold'>Profest</span>
            </Link>
        </div>
    );
};

export default Logo;