import React, { useState } from 'react'
import { userReducer, userInitialState } from './reducer'

function useAsyncReducer(reducer, initState) {
    const [state, setState] = useState(initState),
        dispatchState = async (action) => setState(await reducer(state, action));
    return [state, dispatchState];
}

export const UserContext = React.createContext({
    state: userInitialState,
    dispatch: () => null
})

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useAsyncReducer(userReducer, userInitialState)

    return (
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    )
}