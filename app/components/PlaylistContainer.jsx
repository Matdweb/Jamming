'use client'
import { useState } from "react"
import SongContainer from "./SongContainer"
import Button from "./Button";
import SpotifySongs from "@/lib/Spotify/songs";

function PlaylistContainer() {
    const [playlistName, setPlaylistName] = useState('New Playlist');

    const [songs, setSongs] = useState(SpotifySongs);

    const handleChange = ({ target }) => {
        setPlaylistName(target.value);
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
                    {songs.map((song) => {
                        if (song.name) {
                            return (
                                <SongContainer
                                    key={song.id}
                                    songName={song.name}
                                    artist={song.artist}
                                    album={song.album}
                                    isRemovable={true}
                                />
                            )
                        }
                    })}
                </div>
                <div className='w-full pt-6 flex justify-center sm:justify-end items-center ml-0 sm:ml-6'>
                    <Button state={'l'}>Save this in Spotify</Button>
                </div>
            </div>
        </div>
    )
}

export default PlaylistContainer