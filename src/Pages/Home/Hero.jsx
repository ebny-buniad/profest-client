import React from 'react';
import banner from '../../assets/banner/banner1.png'
import Container from '../../Components/Container/Container';
const Hero = () => {
    return (
        <div>
            <Container>
                <img className='mx-auto my-5 w-full' src={banner} alt="" />
            </Container>
        </div>
    );
};

export default Hero;