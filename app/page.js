'use client'
import { signOut, useSession } from 'next-auth/react'
import Login from './components/Login'
import SongSearcher from './components/SongSearcher';

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <section className='w-full h-full flex justify-center items-start flex-row flex-wrap mt-24'>
          <SongSearcher />
        </section>
      </div>
    )
  } else {
    return <Login />
  }
}
