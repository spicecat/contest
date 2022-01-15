import superagent from 'superagent'
import Cookies from 'universal-cookie'
import { serverUrl } from '../var.js'

const baseUrl = serverUrl + '/user'
const cookies = new Cookies()

export const register = async({ username, name, email, password }) => {
    try {
        const response = await superagent.post(baseUrl, {
            type: 'register',
            name,
            email,
            username,
            password
        })
        const token = response.text
        cookies.set('token', token)
        return response.statusCode
    } catch ({ crossDomain, status }) { return crossDomain ? 521 : status }
}

export const login = async({ username, password }) => {
    try {
        const response = await superagent.post(baseUrl, {
            type: 'authenticate',
            username,
            password
        })
        const token = response.text
        cookies.set('token', token)
        return response.statusCode
    } catch ({ crossDomain, status }) { return crossDomain ? 521 : status }
}

export const logout = () => {
    cookies.remove('username')
    cookies.remove('token')
    window.location.href = '/'
}