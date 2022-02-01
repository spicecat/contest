import { object, string, ref } from 'yup'

const yupString = (name, min = -1, max = Infinity) => string()
    .required(`${name} is required`)
    .min(min, `${name} should be at least ${min} characters`)
    .max(max, `${name} should be at most ${max} characters`)

export const contestSchema = object({
    homeserver: yupString('Homeserver'),
    contest: string()
})

export const registerSchema = object({
    homeserver: yupString('Homeserver', 2, 64),
    name: yupString('Name', 2, 64),
    email: yupString('Email', 5, 320)
        .email('Invalid Email'),
    username: yupString('Username', 4, 16)
        .matches(/^[\w]+$/, 'Username cannot contain special characters'),
    password: yupString('Password', 8),
    confirm_password: yupString('Password')
        .oneOf([ref('password'), null], 'Passwords must match')
})

export const loginSchema = object({
    homeserver: yupString('Homeserver'),
    username: yupString('Username'),
    password: yupString('Password')
})