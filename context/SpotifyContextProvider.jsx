'use client'
import { createContext, useState } from 'react'

export const SpotifyContext = createContext()

function SpotifyContextProvider({ children }) {
    const [accessToken, setAccessToken] = useState('an access token');

    const state={
        token: {
            accessToken,
            setAccessToken
        }
    }
    return (
        <SpotifyContext.Provider value={state}>
            {children}
        </SpotifyContext.Provider>
    )
}

export default SpotifyContextProvider