import superagent from 'superagent'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const register = async ({ homeserver, name, email, username, password }) => {
    try {
        const response = await superagent.post('https://' + homeserver, {
            type: 'register',
            name: name,
            email: email,
            username: username,
            password: password
        })
        cookies.set('username', username)
        cookies.set('homeserver', homeserver)
        cookies.set('password', password)
        return { homeserver, username, statusCode: response.statusCode }
    } catch ({ crossDomain, status }) { return { statusCode: crossDomain ? 521 : status } }
}

export const login = async ({ homeserver, username, password }) => {
    try {
        console.log(homeserver, username, password)
        const response = await superagent.post('https://' + homeserver, {
            type: 'authenticate',
            username: username,
            server: '',
            password: password
        })
        cookies.set('username', username)
        cookies.set('homeserver', homeserver)
        cookies.set('password', password)
        return { homeserver, username, statusCode: response.statusCode }
    } catch ({ crossDomain, status }) { return { statusCode: crossDomain ? 521 : status } }
}

export const logout = () => {
    cookies.remove('username')
    cookies.remove('homeserver')
    cookies.remove('password')
    window.location.href = '/'
}