import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1 className='black-title'>Jamming</h1>
      <h2 className='header-black'>Header black 1</h2>
      <h2 className='header-bold'>Header bold</h2>
      <h3 className='title-bold'>title bold</h3>
      <p>Jamming</p>
      <h4 className='song-title-bold'>Regular Text</h4>
      <p className='song-text'>Song text</p>
      <p className='ligth-text'>ligth txt</p>
      <button className='btn-spotify' />
      <button className='btn-primary song-title-bold'>Primary button</button>
      <button className='btn-primary error song-title-bold'> Error :(</button>
    </>
  )
}
