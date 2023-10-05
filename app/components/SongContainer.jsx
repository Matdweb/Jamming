'use client'
import { useContext, useEffect } from 'react'
import Image from 'next/image'
import addIcon from '@/public/asstes/img/add.png'
import removeIcon from '@/public/asstes/img/minus.png'
import { SpotifyContext } from '@/context/SpotifyContextProvider'

function SongContainer({ content, isRemovable = false }) {
  const { playlist: { addToPlaylist, removeFromPlaylist } } = useContext(SpotifyContext);

  return (
    <div className='min-h-[5rem] sm:min-h-[6rem] border-b flex justify-between items-center flex-row'>
      <div className='pl-3 pr-9 flex justify-center items-start flex-col text-start'>
        <h4 className='song-title-bold'>{content.song_name}</h4>
        <p className='ligth-text'>{content.artist}  |  {content.album}</p>
      </div>
      <span className='pr-4 cursor-pointer shrink-0 grow-0'>
        <Image
          className='cursor-pointer active:scale-90'
          src={isRemovable ? removeIcon : addIcon}
          alt='add or remove icon'
          onClick={() => {
            if(!isRemovable){
              addToPlaylist(content);
            } else {
              removeFromPlaylist(content.id);
            }
          }}
        />
      </span>
    </div>
  )
}

export default SongContainer