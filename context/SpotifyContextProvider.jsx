'use client'
import { createContext, useEffect, useState } from 'react'
import requestAccessToken from '@/lib/Spotify/getAccessToken/requestAccessToken';

export const SpotifyContext = createContext()

function SpotifyContextProvider({ children }) {
    const [accessToken, setAccessToken] = useState(null);

    const getAccessToken = async (refresh_token) => {
        if (accessToken) {
            console.log('Theres already a token')
            return accessToken;
        }
        return await requestAccessToken(refresh_token, setAccessToken);
    }

    const state = {
        token: {
            getAccessToken,
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