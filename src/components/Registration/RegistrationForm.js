import { useFormik } from 'formik';
import React, { useState } from 'react';
import useGetAge from '../../hooks/useGetAge';
import { registrationValidations } from '../../validations/formValidations';

const RegistrationForm = () => {
    const [ageError, setAgeError] = useState('');
    const initialValues = {
        fName: '',
        lName: '',
        email: '',
        password: '',
        birthDate: new Date().getDate(),
        birthMonth: new Date().getMonth() + 1,
        birthYear: new Date().getFullYear(),
        gender: '',
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: registrationValidations,
        onSubmit: async () => {
            //age validation
            if (age < 16) {
                return setAgeError("You are under 16. You are not eligible!");
            } else if (age > 85) {
                return setAgeError("You are over 85. You are not eligible!");
            } else { setAgeError('') }
            console.log("congratulations!");
        }
    })


    const { age } = useGetAge(formik.values.birthYear, formik.values.birthMonth, formik.values.birthDate);
    //*calender
    const currentYear = new Date().getFullYear();
    const years = Array.from(new Array(100), (val, index) => currentYear - index);
    const monthcount = Array.from(new Array(12), (val, index) => index + 1);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const getDays = (year, month) => {
        return new Date(year, month, 0).getDate();
    };
    let days = Array.from(new Array(getDays(formik.values.birthYear, formik.values.birthMonth)), (val, index) => index + 1);
    //** */



    return (
        <form className='flex flex-col gap-y-1' onSubmit={formik.handleSubmit}>
            <input
                className='w-full mt-2 md:w-3/4 h-10 px-5 py-3 border border-border_color rounded-md focus:outline-none'
                name='fName'
                type='text'
                placeholder='First Name'
                onChange={formik.handleChange}
                value={formik.values.fName}
            />
            {formik.touched.fName && formik.errors.fName ? (
                <p className='text-sm text-error'>{formik.errors.fName}</p>
            ) : null}

            <input
                className='w-full mt-2 md:w-3/4 h-10 px-5 py-3 border border-border_color rounded-md focus:outline-none'
                name='lName'
                type='text'
                placeholder='Last Name'
                onChange={formik.handleChange}
                value={formik.values.lName}
            />
            {formik.touched.lName && formik.errors.lName ? (
                <p className='text-sm text-error'>{formik.errors.lName}</p>
            ) : null}

            <input
                className='w-full mt-2 md:w-3/4 h-10 px-5 py-3 border border-border_color rounded-md focus:outline-none'
                name='email'
                type='email'
                placeholder='Email Address'
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
                placeholder='Password'
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <p className='text-sm text-error'>{formik.errors.password}</p>
            ) : null}

            <label>Date of birth:</label>
            <div className='flex gap-x-3 mt-2'>
                <select
                    className=' w-1/5 h-8 px-3 py-1 border border-border_color rounded-md focus:outline-none'
                    name="birthDate"
                    id="date"
                    onChange={formik.handleChange}
                    value={formik.values.birthDate}
                >
                    {
                        days.map((day, index) =>
                            <option key={index} value={day}>{day}</option>
                        )
                    }

                </select>
                <select
                    className=' w-1/5 h-8 px-3 py-1 border border-border_color rounded-md focus:outline-none'
                    name="birthMonth"
                    id="month"
                    onChange={formik.handleChange}
                    value={formik.values.birthMonth}
                >
                    {
                        monthcount.map((month, index) =>
                            <option key={index} value={month}>{months[month - 1]}</option>
                        )
                    }

                </select>
                <select
                    className=' w-1/4 h-8 px-3 py-1 border border-border_color rounded-md focus:outline-none'
                    name="birthYear"
                    id="year"
                    onChange={formik.handleChange}
                    value={formik.values.birthYear}
                >
                    {
                        years.map((year, index) =>
                            <option key={index} value={year}>{year}</option>
                        )
                    }
                </select>
            </div>
            {ageError ? <p className='text-sm text-error'>{ageError}</p> : null}

            <label>Gender:</label>
            <div className='flex gap-x-4 mt-2'>
                <div className='flex items-center gap-x-1'>
                    <input type="radio" id="male" name="gender" value="male" onChange={formik.handleChange} />
                    <label htmlFor="male">Male</label>
                </div>
                <div className='flex items-center gap-x-1'>
                    <input type="radio" id="female" name="gender" value="female" onChange={formik.handleChange} />
                    <label htmlFor="female">Female</label>
                </div>
                <div className='flex items-center gap-x-1'>
                    <input type="radio" id="others" name="gender" value="others" onChange={formik.handleChange} />
                    <label htmlFor="others">Others</label>
                </div>
            </div>
            {formik.touched.gender && formik.errors.gender ? (
                <p className='text-sm text-error'>{formik.errors.gender}</p>
            ) : null}
            <button
                className='w-full md:w-3/4 px-5 py-3 bg-primary hover:bg-[#669ee9] border border-border_color rounded-md font-bold text-white'
                type='submit'>
                Sign Up
            </button>
        </form>
    )
}

export default RegistrationForm