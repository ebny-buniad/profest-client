import React from 'react';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'
import Container from '../Components/Container/Container';

const AuthLayout = () => {
    return (
        <Container>
            <div className='grid grid-cols-2 justify-around items-center h-[100vh]'>
                <div>
                    <Outlet></Outlet>
                </div>
                <div>
                    <img src={authImg} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default AuthLayout;