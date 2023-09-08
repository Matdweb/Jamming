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
        <Button state={'loading'} >Sign Out</Button>
        <Button state={'error'} >Sign Out</Button>
        <Button state={'successful'} toggle={signOut} >Sign Out</Button>
        <Button state={'j'} toggle={signOut} >default</Button>
      </div>
    )
  } else {
    return <Login />
  }
}
