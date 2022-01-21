import { register, login } from '../services/userService'

export const userReducer = async (state, { type, value }) => {
  switch (type) {
    case 'register': return register(value)
    case 'login': return login(value)
    case 'reset': return userInitState
    default: return state
  }
}

export const userInitState = { }