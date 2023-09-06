'use client'
import { signOut, useSession } from 'next-auth/react'
import Login from './components/Login'
import Button from './components/Button';

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <h1 className='title-bold'>Welcome {session?.token?.name}</h1>
        <Button error={false} toggle={signOut}>Sign Out</Button>
      </div>
    )
  } else {
    return <Login />
  }
}
