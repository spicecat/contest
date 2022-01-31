import superagent from 'superagent'
import superagentCache from 'superagent-cache'

superagentCache(superagent, null, { preventDuplicateCalls: true })

export const getContests = async({ homeserver }) => {
    try {
        const { contests } = await superagent.post('https://' + homeserver, {
            type: 'about'
        })
        return { contests }
    } catch (err) {}
}

export const getContest = async({ homeserver, contest }) => {
    try {
        return (await superagent.post('https://' + homeserver).query({ contest })).body
    } catch (err) {}
}
export const getProblems = async({ homeserver, contest }) => {
    try {
        return (await superagent.post('https://' + homeserver).query({ contest })).body.slice(2, -1)
    } catch (err) {}
}