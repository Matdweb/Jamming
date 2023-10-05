'use client'
import { signOut, useSession } from 'next-auth/react'
import Login from './components/Login'
import SongSearcher from './components/SongSearcher';
import SongsContainer from './components/SongsContainer';
import PlaylistContainer from './components/PlaylistContainer';
import Background from './components/Background';

export default function Home() {
  const { data: session } = useSession();
  return (
    <Background>
      <div>
        <section className='text-center pt-16 sm:pt-24'>
          <h2 className='header-black'>Create your custom playlist with</h2>
          <h1 className='black-title'>Jamming</h1>
        </section>
        {!session ? <Login /> :
          <section className='w-full h-full flex justify-center items-start flex-row flex-wrap md:mt-24 mt-16 pb-32'>
            <SongSearcher />
            <SongsContainer />
            <PlaylistContainer />
          </section>}
      </div>
    </Background>
  )
}
