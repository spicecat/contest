import React, { useState, createContext } from 'react'
import { contestReducer, contestInitState } from './Contest'
import { userReducer, userInitState } from './User'

function useAsyncReducer(reducer, initState) {
    const [state, setState] = useState(initState),
        dispatchState = async (action) => setState(await reducer(state, action));
    return [state, dispatchState];
}

export const ContestContext = createContext({
    state: contestInitState,
    dispatch: () => null
})

export const ContestProvider = ({ children }) => {
    const [state, dispatch] = useAsyncReducer(contestReducer, contestInitState)

    return (
        <ContestContext.Provider value={[state, dispatch]}>
            {children}
        </ContestContext.Provider>
    )
}

export const UserContext = createContext({
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