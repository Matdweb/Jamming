'use client'
import { signOut, useSession } from 'next-auth/react'
import Login from './components/Login'

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <h1 className='title-bold'>Welcome {session?.token?.name}</h1>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    )
  } else {
    return <Login />
  }
}
