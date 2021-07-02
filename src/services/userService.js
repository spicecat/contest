import superagent from 'superagent'
import Cookies from 'universal-cookie'

import { serverUrl } from '../var.js'

const baseUrl = serverUrl + '/user'
const cookies = new Cookies()

export const register = async user => {
    const url = baseUrl + '/register'
    console.log(url, user) // remove
    try {
        const response = await superagent.post(url, user) // encrypt password before sending?
        const { token } = response.body
        cookies.set('token', token)
        console.log('token', token) // remove
        return true
    } catch (err) { console.log('error', err) } // remove
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
    } catch (err) { console.log('error', err) } // remove
}

export const logout = () => {
    cookies.remove('username')
    cookies.remove('token')
}