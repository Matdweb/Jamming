'use client'
import { signIn } from "next-auth/react";

function Login() {
    return (
        <section className='w-full flex justify-center items-center px-9 pb-20'>
            <div className='max-w-[37rem] mt-16 sm:mt-36 px-4 sm:px-6 py-8 shadow-black bg-black/70 rounded-[2.5rem] flex justify-center items-center flex-col flex-nowrap'>
                <h3 className='text-center title-bold mb-6 sm:mb-8'>Login to create new awesome custome playlists</h3>
                <p className='mb-24 sm:mb-16'>Click now to Log In with your Spotify account!</p>
                <button className='btn-spotify' onClick={() => signIn()} />
            </div>
        </section>
    )
}

export default Login;
