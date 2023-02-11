import React from 'react';
import LoginForm from '../components/Login/LoginForm';

const Login = () => {
    return (
        <div className='container'>
            <div className='flex justify-center items-center w-full h-screen'>
                <div className='grid grid-cols-1 px-5 md:px-0  md:grid-cols-2 gap-5 lg:gap-10'>
                    <div className='hidden md:flex justify-end items-center'>
                        <img className='md:max-w-sm lg:max-w-md h-fit' src='../../../images/login-bro.png' alt='registration-img' />
                    </div>
                    <div>
                        <div className='pb-10'>
                            <h1 className='font-teko font-extrabold text-5xl tracking-widest text-primary'>kryptonite</h1>
                            <p>Login now and connect with the people in your life.</p>
                        </div>

                        <LoginForm />

                        <a href='#' className='font-bold text-primary'>Forgot password?</a>
                        <div className='w-full md:w-3/4'>
                            <p className=' text-center'>Already registered?<a className='font-bold text-primary' href='#'>Login</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login