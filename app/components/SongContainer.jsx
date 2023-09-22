'use client'
import { useContext, useEffect } from 'react'
import Image from 'next/image'
import addIcon from '../../public/asstes/img/add.png'
import removeIcon from '../../public/asstes/img/minus.png'
import { SpotifyContext } from '@/context/SpotifyContextProvider'

function SongContainer({ content, isRemovable = false }) {
  const { playlist: { addToPlaylist, removeFromPlaylist } } = useContext(SpotifyContext);

  return (
    <div className='h-20 sm:h-24 border-b flex justify-between items-center flex-row'>
      <div className='pl-3 pr-9 flex justify-center items-start flex-col text-start'>
        <h4 className='song-title-bold'>{content.name}</h4>
        <p className='ligth-text'>{content.artist}  |  {content.album}</p>
      </div>
      <span className='pr-4 cursor-pointer'>
        <Image
          className='cursor-pointer active:scale-95'
          src={isRemovable ? removeIcon : addIcon}
          alt='add icon'
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