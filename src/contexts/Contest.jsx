import { getContests, getContest, getProblems } from '../services/contestService'

export const contestReducer = async (state, { type, value }) => { // store and return user info across containers
  switch (type) {
    case 'getContests': return getContests(value)
    case 'getContest': return getContest(value)
    case 'getProblems': return getProblems(value)
    case 'reset': return contestInitState
    default: return state
  }
}

export const contestInitState = {}