import superagent from 'superagent'
import Cookies from 'universal-cookie'

import { serverUrl } from '../var.js'

const baseUrl = serverUrl + '/user'
const cookies = new Cookies()

export const register = async ({ username, password }) => {
    const url = baseUrl + '/register'
    try {
        const auth = Buffer.from(username + ':' + password, 'ascii').toString('base64')
        const response = await superagent.post(url).set('Authorization', 'Basic ' + auth)
        const token = response.text
        cookies.set('token', token)
        return true
    } catch (err) { console.log('error', err) } // remove
}

export const login = async ({ username, password }) => {
    const url = baseUrl + '/login'
    try {
        const auth = Buffer.from(username + ':' + password, 'ascii').toString('base64')
        const response = await superagent.get(url).set('Authorization', 'Basic ' + auth)
        const token = response.text
        cookies.set('token', token)
        cookies.set('username', username)
        return true
    } catch (err) { console.log('error', err) } // remove
}

export const logout = () => {
    cookies.remove('username')
    cookies.remove('token')
}