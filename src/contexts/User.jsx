import { createContext, useReducer } from 'react'

const initialState = {}

const reducer = (state, { type, value }) => {
  switch (type) {
    case 'set': return value
    case 'reset': return initialState
    default: return state
  }
}

export const UserContext = createContext({
  state: initialState,
  dispatch: () => null
})

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  )
}