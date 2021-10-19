import { object, string, ref } from 'yup'

const yupString = (name, min = 0, max = Infinity) => string()
    .required(`${name} is required`)
    .min(min, `${name} should be at least ${min} characters`)
    .max(max, `${name} should be at most ${max} characters`)

export const registerSchema = object({
    username: yupString('Username', 4, 16)
        .matches(/^[\w]+$/, 'Username cannot contain special characters'),
    name: yupString('Name', 2, 64),
    email: yupString('Email', 5, 320)
        .email('Invalid Email'),
    password: yupString('Password', 8),
    confirm_password: yupString('Password')
        .oneOf([ref('password'), null], 'Passwords must match')
})

export const loginSchema = object({
    username: string().required('Username is required'),
    password: string().required('Password is required')
})