import { useFormik } from 'formik';
import React from 'react';
import { loginValidations } from '../../validations/formValidations';

const LoginForm = () => {

    const initialValues = {
        email: '',
        password: ''
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: loginValidations,
        onSubmit: async () => {

        }
    })
    return (
        <form className='flex flex-col gap-y-1' onSubmit={formik.handleSubmit}>
            <input
                className='w-full mt-2 md:w-3/4 h-10 px-5 py-3 border border-border_color rounded-md focus:outline-none'
                name='email'
                type='email'
                placeholder='Enter your email'
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <p className='text-sm text-error'>{formik.errors.email}</p>
            ) : null}
            <input
                className='w-full mt-2 md:w-3/4 h-10 px-5 py-3 border border-border_color rounded-md focus:outline-none'
                name='password'
                type='password'
                placeholder='Enter your password'
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <p className='text-sm text-error'>{formik.errors.password}</p>
            ) : null}
            <button
                className='w-full mt-2 md:w-3/4 px-5 py-3 bg-primary hover:bg-[#669ee9] border border-border_color rounded-md font-bold text-white'
                type='submit'>
                Login
            </button>
        </form>
    )
}

export default LoginForm