export const initState = {}

export const reducer = (state, { type, value }) => {
  switch (type) {
    case 'set': return value
    case 'reset': return initState
    default: return state
  }
}