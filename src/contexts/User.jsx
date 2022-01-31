import { register, login, logout } from '../services/userService'

export const userReducer = async (state, { type, value }) => { // store and return user info across containers
  switch (type) {
    case 'register': return register(value)
    case 'login': return login(value)
    case 'logout': {
      logout()
      return userInitState
    }
    default: return state
  }
}

export const userInitState = {}