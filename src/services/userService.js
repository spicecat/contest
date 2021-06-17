import superagent from 'superagent'
import Cookies from 'universal-cookie'

const url = 'https://server.exozy.me'
const cookies = new Cookies()

export const login = async user => {
    const { username, password } = user
    const base64String = Buffer.from(`${username}:${password}`, 'ascii').toString('base64')
    console.log(username, password, base64String)
    const headers = { Authorization: `Basic ${base64String}` }
    const tokenUrl = url + '/token'
    try {
        const response = await superagent.post(tokenUrl, username).set(headers)
        const { token } = response.body
        cookies.set('token', token)
        console.log('token', token) // remove
        return true
    } catch (err) {
        console.log('error', err) // remove
    }
    return false
}