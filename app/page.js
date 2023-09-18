'use client'
import { signOut, useSession } from 'next-auth/react'
import Login from './components/Login'
import SongSearcher from './components/SongSearcher';
import SongsContainer from './components/SongsContainer';
import PlaylistContainer from './components/PlaylistContainer';

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <section className='w-full h-full flex justify-center items-start flex-row flex-wrap md:mt-24 mt-16 pb-32'>
          <SongSearcher />
          <SongsContainer />
          <PlaylistContainer />
        </section>
      </div>
    )
  } else {
    return <Login />
  }
}
