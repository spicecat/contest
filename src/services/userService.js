import superagent from 'superagent'
import Cookies from 'universal-cookie'
import { url } from '../var.js'

const cookies = new Cookies()

export const register = async ({ username, name, email, password }) => {
    try {
        const response = await superagent.post(url, {
            type: 'register',
            name: name,
            email: email,
            username: username,
            password: password
        })
        cookies.set('password', password)
        return response.statusCode
    } catch ({ crossDomain, status }) { return crossDomain ? 521 : status }
}

export const login = async ({ username, password }) => {
    try {
        console.log(await superagent.post(url, { type: 'about' }))
        const response = await superagent.post(url, {
            type: 'authenticate',
            username: username,
            server: 'contest.exozy.me',
            password: password
        })
        cookies.set('password', password)
        return response.statusCode
    } catch ({ crossDomain, status }) { return crossDomain ? 521 : status }
}

export const logout = () => {
    cookies.remove('username')
    cookies.remove('password')
    window.location.href = '/'
}