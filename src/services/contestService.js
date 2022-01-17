import superagent from 'superagent'
import { url } from '../var.js'

export const getContests = async() => {
    try {
        return (await superagent.get(url)).body
    } catch (err) {}
}

export const getContest = async(contest) => {
    try {
        return (await superagent.get(url).query({ contest })).body
    } catch (err) {}
}
export const getProblems = async(contest) => {
    try {
        return (await superagent.get(url).query({ contest })).body.slice(2, -1)
    } catch (err) {}
}