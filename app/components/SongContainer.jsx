import React from 'react'
import Image from 'next/image'
import addIcon from '../../public/asstes/img/add.png'
import removeIcon from '../../public/asstes/img/minus.png'

function SongContainer({ songName, artist, album, isRemovable = false }) {
  return (
    <div className='h-20 sm:h-24 border-b flex justify-between items-center flex-row'>
      <div className='pl-3 pr-9 flex justify-center items-start flex-col text-start'>
        <h4 className='song-title-bold'>{songName}</h4>
        <p className='ligth-text'>{artist}  |  {album}</p>
      </div>
      <span className='pr-4 cursor-pointer'>
        <Image src={ isRemovable ? removeIcon : addIcon } alt='add icon' />
      </span>
    </div>
  )
}

export default SongContainer