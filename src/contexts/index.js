import React, { useState } from 'react'
import { userReducer, userInitState } from './User'

function useAsyncReducer(reducer, initState) {
    const [state, setState] = useState(initState),
        dispatchState = async (action) => setState(await reducer(state, action));
    return [state, dispatchState];
}

export const UserContext = React.createContext({
    state: userInitState,
    dispatch: () => null
})

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useAsyncReducer(userReducer, userInitState)

    return (
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    )
}