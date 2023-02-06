import React from 'react';

const RegistrationForm = () => {

    //calender
    const currentYear = new Date().getFullYear();
    const years = Array.from(new Array(100), (val, index) => currentYear - index);
    const monthcount = Array.from(new Array(12), (val, index) => index);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const getDays = (year, month) => {
        return new Date(year, month, 0).getDate();
    };
    const days = Array.from(new Array(getDays(1997, 10)), (val, index) => index + 1);


    return (
        <form className='flex flex-col gap-y-3'>
            <input
                className='w-full md:w-3/4 h-10 px-5 py-3 border border-border_color rounded-md focus:outline-none'
                name='first_name'
                type='text'
                placeholder='First Name'
            />

            <input
                className='w-full md:w-3/4 h-10 px-5 py-3 border border-border_color rounded-md focus:outline-none'
                name='last_name'
                type='text'
                placeholder='Last Name'
            />

            <input
                className='w-full md:w-3/4 h-10 px-5 py-3 border border-border_color rounded-md focus:outline-none'
                name='email'
                type='email'
                placeholder='Email Address'
            />
            <input
                className='w-full md:w-3/4 h-10 px-5 py-3 border border-border_color rounded-md focus:outline-none'
                name='password'
                type='password'
                placeholder='Password'
            />

            <label>Date of birth:</label>
            <div className='flex gap-x-3'>
                <select className=' w-1/5 h-8 px-3 py-1 border border-border_color rounded-md focus:outline-none' name="Date" id="date">
                    {
                        days.map((day, index) =>
                            <option key={index} value={day}>{day}</option>
                        )
                    }

                </select>
                <select className=' w-1/5 h-8 px-3 py-1 border border-border_color rounded-md focus:outline-none' name="Date" id="date">
                    {
                        monthcount.map((month, index) =>
                            <option key={index} value={months[month]}>{months[month]}</option>
                        )
                    }

                </select>
                <select className=' w-1/4 h-8 px-3 py-1 border border-border_color rounded-md focus:outline-none' name="Date" id="date">
                    {
                        years.map((year, index) =>
                            <option key={index} value={year}>{year}</option>
                        )
                    }
                </select>
            </div>

            <label>Gender:</label>
            <div className='flex gap-x-4'>
                <div className='flex items-center gap-x-1'>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label for="male">Male</label>
                </div>
                <div className='flex items-center gap-x-1'>
                    <input type="radio" id="female" name="gender" value="female" />
                    <label for="female">Female</label>
                </div>
                <div className='flex items-center gap-x-1'>
                    <input type="radio" id="others" name="gender" value="others" />
                    <label for="others">Others</label>
                </div>
            </div>
            <button className='w-full md:w-3/4 px-5 py-3 bg-primary hover:bg-[#669ee9] border border-border_color rounded-md font-bold text-white'>Sign Up</button>
        </form>
    )
}

export default RegistrationForm