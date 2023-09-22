'use client'
import { useEffect, useState } from "react"
import SongContainer from "./SongContainer"
import Button from "./Button";
import { useContext } from 'react';
import { SpotifyContext } from '@/context/SpotifyContextProvider';
import { useSession } from "next-auth/react";
import createNewPlaylist from "@/lib/Spotify/createNewPlaylist/createNewPlaylist";

function PlaylistContainer() {
    const [playlistName, setPlaylistName] = useState('New Playlist');
    const { playlist: { playlistSongs } } = useContext(SpotifyContext)

    const { data: session } = useSession();
    const refresh_token = session?.token.accessToken;
    const { token: { getAccessToken } } = useContext(SpotifyContext);

    const handleChange = ({ target }) => {
        setPlaylistName(target.value);
    }

    const createPlaylist = async () => {
        const access_token = await getAccessToken(refresh_token);
        const response = await createNewPlaylist(access_token, playlistName, playlistSongs);

        console.log(response);
    }

    return (
        <div className='max-w-[44rem] flex justify-center items-center sm:px-8 pb-9'>
            <div className='sm:w-[37rem] w-[21rem] h-[31rem] sm:h-[47rem] shadow-black rounded-[2.5rem] bg-black/70 pt-2 px-4 sm:pl-10 sm:pr-16 songs-container'>
                <input
                    className='header-bold max-w-full rounded-2xl rounded-b-none focus-visible:outline-2 focus-visible:outline-white hover:opacity-70'
                    style={{ background: 'none' }}
                    value={playlistName}
                    placeholder="Playlist Name"
                    onChange={handleChange}
                />
                <hr className='w-full border-t-4 mb-4 bg-black' />
                <div className='w-full max-h-[20rem] sm:max-h-[32rem] min-h-[20rem] sm:min-h-[32rem] overflow-y-scroll'>
                    {playlistSongs.map((song) => {
                        return (
                            <SongContainer
                                key={song.id}
                                content={song}
                                isRemovable={true}
                            />
                        )
                    })}
                </div>
                <div className='w-full pt-6 flex justify-center sm:justify-end items-center ml-0 sm:ml-6'>
                    <Button state={'loading'} toggle={async () => await createPlaylist()}>Save this in Spotify</Button>
                </div>
            </div>
        </div>
    )
}

export default PlaylistContainer