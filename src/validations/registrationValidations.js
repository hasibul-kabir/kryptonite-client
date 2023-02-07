import * as Yup from 'yup';

const registrationValidations = Yup.object({
    fName: Yup.string().max(8).min(2).required('Please Enter your first name.'),
    lName: Yup.string().max(8).min(2).required('Please Enter your last name'),
    email: Yup.string().email('Invalid email address').required('Please enter your email address'),
    password: Yup.string().required('Please Enter your password').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Password should contain minimum eight characters, at least one letter, one number and one special character!'),
    gender: Yup.string().required('Please select your gender')
})
export default registrationValidations;