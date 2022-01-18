import superagent from 'superagent'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const register = async ({ name, email, username, homeserver, password }) => {
    try {
        const response = await superagent.post(homeserver, {
            type: 'register',
            name: name,
            email: email,
            username: username,
            password: password
        })
        cookies.set('username', username)
        cookies.set('homeserver', homeserver)
        cookies.set('password', password)
        return response.statusCode
    } catch ({ crossDomain, status }) { return crossDomain ? 521 : status }
}

export const login = async ({ username, homeserver, password }) => {
    try {
        const response = await superagent.post(homeserver, {
            type: 'authenticate',
            username: username,
            server: '',
            password: password
        })
        cookies.set('username', username)
        cookies.set('homeserver', homserver)
        cookies.set('password', password)
        return response.statusCode
    } catch ({ crossDomain, status }) { return crossDomain ? 521 : status }
}

export const logout = () => {
    cookies.remove('username')
    cookies.remove('homeserver')
    cookies.remove('password')
    window.location.href = '/'
}