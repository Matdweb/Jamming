'use client'
import SongContainer from "./SongContainer"
import { useContext, useEffect } from "react"
import { SpotifyContext } from "@/context/SpotifyContextProvider"

function SongsContainer() {
  const { songs: { resultSongs } } = useContext(SpotifyContext);

  return (
    <div className='max-w-[44rem] flex justify-center items-center sm:px-8 pb-9'>
      <div className='sm:w-[37rem] w-[21rem] h-[31rem] sm:h-[47rem] shadow-black rounded-[2.5rem] bg-black/70 pt-2 px-4 sm:pl-10 sm:pr-16 songs-container'>
        <h2 className='header-bold'>Results</h2>
        <hr className='w-full border-t-4 mb-4' />
        <div className='w-full max-h-[22rem] sm:max-h-[37rem] overflow-y-scroll'>
          {resultSongs.map((song) => {
            return (
              <SongContainer
                key={song.id}
                content={song}
                isRemovable={false}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SongsContainer