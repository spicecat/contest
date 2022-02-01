import superagent from 'superagent'
import superagentCache from 'superagent-cache'

superagentCache(superagent, null, { preventDuplicateCalls: true })

export const getContests = async ({ homeserver }) => {
    try {
        const response = await superagent.post('https://' + homeserver, {
            type: 'about'
        })
        return response.body.contests
    } catch (err) {
        return []
    }
}

export const getContest = async ({ homeserver, contest }) => {
    try {
        return (await superagent.post('https://' + homeserver).query({ contest })).body
    } catch (err) { }
}
export const getProblems = async ({ homeserver, contest }) => {
    try {
        return (await superagent.post('https://' + homeserver).query({ contest })).body.slice(2, -1)
    } catch (err) { }
}