import superagent from 'superagent'
import Cookies from 'universal-cookie'
import { object, string, ref } from 'yup'

const baseUrl = 'https://server.exozy.me' // 127.0.0.1:6000/upload
const cookies = new Cookies()

export const schema = {
    register:
        object({
            username: string()
                .required('Username is required'),
            password: string()
                .min(8, 'Password should be of minimum 8 characters length')
                .required('Password is required'),
            confirm_password: string()
                .oneOf([ref('password'), null], 'Passwords must match')
                .required('Password is required')
        }),
    login: object({
        username: string()
            .required('Username is required'),
        password: string()
            .required('Password is required')
    })
}

export const register = async user => {
    const url = baseUrl + '/register'
    try {
        const response = await superagent.post(url, user) // encrypt password before sending?
        const { token } = response.body
        cookies.set('token', token)
        console.log('token', token) // remove
        return true
    } catch (err) {
        console.log('error', err) // remove
    }
    return false
}

export const login = async user => {
    const url = baseUrl + '/login'
    const { username, password } = user
    const base64String = Buffer.from(`${username}:${password}`, 'ascii').toString('base64')
    console.log(user, base64String)
    const headers = { Authorization: `Basic ${base64String}` }
    try {
        const response = await superagent.post(url, username).set(headers)
        const { token } = response.body
        cookies.set('token', token)
        cookies.set('username', username)
        console.log('token', token) // remove
        return true
    } catch (err) {
        console.log('error', err) // remove
    }
    return false
}

export const logout = () => {
    cookies.remove('username')
    cookies.remove('token')
}