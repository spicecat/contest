import superagent from 'superagent'

import { serverUrl } from '../var.js'

const baseUrl = serverUrl + '/contest'

export const getContests = async() => {
    try {
        const url = baseUrl
        const { body: contests } = await superagent.get(url)
        return contests
    } catch (err) {}
}

export const getContest = async(contest) => {
    try {
        const url = baseUrl
        const { body: info } = await superagent.get(url).query(contest)
        return info
    } catch (err) {}
}