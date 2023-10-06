'use client'
import { useContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { SpotifyContext } from '@/context/SpotifyContextProvider';
import requestSongs from '@/lib/Spotify/requestSongs/requestSongs';
import { useRouter } from 'next/navigation';

function SongSearcher() {
    const [songName, setSongName] = useState('');
    const { token: { getAccessToken }, songs: { setResultSongs } } = useContext(SpotifyContext);
    const { data: session } = useSession();
    const refresh_token = session?.token.accessToken;
    const router = useRouter();

    const handleChange = ({ target }) => {
        setSongName(target.value);
    }

    const handleSearchError = () => {
        router.push('/error');
    }

    const searchSongs = async () => {
        if (songName) {
            const access_token = await getAccessToken(refresh_token);
            const songs = await requestSongs(access_token, songName);
            setResultSongs(songs);
            
            if (songs.length === 0) {
                handleSearchError();
            }
        } else {
            setResultSongs([]);
        }
    }

    useEffect(() => {
        const pause = setTimeout(() => {
            searchSongs();
        }, 2000)
        return () => clearTimeout(pause);
    }, [songName])

    return (
        <section className='w-full flex justify-center items-center md:mb-32 mb-14'>
            <div className='max-w-[50rem] flex justify-center items-center flex-row flex-wrap'>
                <p className='mr-3.5'>Search for any song <i>“names”</i></p>
                <input
                    className='sm:text-[2rem] text-[1.2rem] font-normal w-72 h-14 rounded-2xl bg-black/70 shadow-lg px-4 pt-2 pb-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white'
                    id='song_name'
                    name='song-name'
                    type='text'
                    placeholder='My song...'
                    maxLength='100'
                    value={songName}
                    onChange={handleChange}
                />
            </div>
        </section>
    )
}

export default SongSearcher