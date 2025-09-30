import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {

    const { signinWithGoogle } = useAuth();

    const handelSignInWithGoogle = () => {
        signinWithGoogle()
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <div>
                <button onClick={() => handelSignInWithGoogle()} className='btn w-full'><FcGoogle size={20} />Login with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;