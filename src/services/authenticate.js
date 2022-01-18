import superagent from 'superagent'
import { url } from '../var.js'
import { cookies } from 'userService.js'

export const authenticate = async ({ server }) => {
    try {
        const response = await superagent.post(url, {
            type: 'authenticate',
            username: cookies.get('username'),
            server: server,
            password: cookies.get('password')
        })
        return response.body
    } catch ({ crossDomain, status }) { return crossDomain ? 521 : status }
}