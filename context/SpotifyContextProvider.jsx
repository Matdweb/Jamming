'use client'
import { createContext, useState } from 'react'
import requestAccessToken from '@/lib/Spotify/getAccessToken/requestAccessToken';

export const SpotifyContext = createContext()

function SpotifyContextProvider({ children }) {
    const [accessToken, setAccessToken] = useState(null);
    const [resultSongs, setResultSongs] = useState([]);
    const [playlistSongs, setPlaylistSongs] = useState([]);

    const getAccessToken = async (refresh_token) => {
        if (accessToken) {
            console.log('Theres already a token')
            return accessToken;
        }
        return await requestAccessToken(refresh_token, setAccessToken);
    }

    const addToPlaylist = (song) => {
        if(!playlistSongs.includes(song)){
            setPlaylistSongs(prev => [...prev, song]);
        }
    }

    const removeFromPlaylist = (id) => {
        setPlaylistSongs(playlistSongs.filter(song => song.id !== id))
    }

    const state = {
        token: {
            getAccessToken,
            setAccessToken
        },
        songs: {
            resultSongs,
            setResultSongs,
        },
        playlist: {
            playlistSongs,
            addToPlaylist,
            removeFromPlaylist,
        }
    }

    return (
        <SpotifyContext.Provider value={state}>
            {children}
        </SpotifyContext.Provider>
    )
}

export default SpotifyContextProvider