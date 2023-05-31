import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters long'),
    email: yup
        .string()
        .required('Email is required')
        .email('Please enter a valid email address'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
    tos: yup
        .boolean()
        .oneOf([true], 'You must accept the Terms of Service')

})

export default formSchema;