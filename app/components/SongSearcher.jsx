'use client'
import { useState } from 'react'

function SongSearcher() {
    const [songName, setSongName] = useState('');

    const handleChange = ({ target }) => {
        setSongName(target.value);
    }

    return (
        <section className='w-full flex justify-center items-center'>
            <div className='max-w-[50rem] flex justify-center items-center flex-row flex-wrap'>
                <p className='mr-3.5'>Search for any song <i>“names”</i></p>
                <input
                    className='text-[2rem] font-normal w-72 h-14 rounded-2xl bg-black/70 shadow-lg px-4 pt-2 pb-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white'
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