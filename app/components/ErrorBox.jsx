import React from 'react'
import Link from 'next/link'

function ErrorBox() {
    return (
        <div className='sm:w-[32rem] w-[19rem] h-24 bg-black outline outline-1 outline-white absolute mt-[-6rem] flex justify-start items-center'>
            <Link href='/error' className='ml-5 hover:underline'>
                <h4 className='song-title-bold'>Error :(</h4>
                <p className='song-text'>There was an error creating the playlist</p>
            </Link>
        </div>
    )
}

export default ErrorBox