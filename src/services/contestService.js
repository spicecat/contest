import superagent from 'superagent'
import { serverUrl } from '../var.js'

const baseUrl = serverUrl + '/contest'

export const getContests = async() => {
    try {
        const url = baseUrl
        return (await superagent.get(url)).body
    } catch (err) {}
}

export const getContest = async(contest) => {
    try {
        const url = baseUrl
        return (await superagent.get(url).query({ contest })).body
    } catch (err) {}
}
export const getProblems = async(contest) => {
    try {
        const url = baseUrl + '/problems'
        return (await superagent.get(url).query({ contest })).body.slice(2, -1)
    } catch (err) {}
}