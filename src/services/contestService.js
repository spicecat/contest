import superagent from 'superagent'

import { serverUrl } from '../var.js'

const baseUrl = serverUrl + '/contest'

export const getContests = async() => {
    try {
        const url = baseUrl
        const response = await superagent.get(url)
        console.log(response)
        return response
    } catch (err) {}
}