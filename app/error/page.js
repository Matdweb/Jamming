import React from 'react'
import Background from '../components/Background'
import Link from 'next/link'

function page() {
    return (
        <Background error={true}>
            <section className='w-full h-full pt-20 pl-14 sm:pl-28 pb-28'>
                <div className='pb-14'>
                    <h1 className='black-title'>Error :(</h1>
                    <h2 className='header-black'>Learn more</h2>
                </div>
                <p className='w-11/12 mb-14'>
                    Learn about the privacy politics of Spotify
                    <Link href='https://www.spotify.com/cl/legal/privacy-policy/#5-c%C3%B3mo-compartimos-tus-datos-personales'> <u>here</u>.</Link>

                    <br /><br />
                    You must be sure that:
                    <br /><br />
                    <span className='font-bold'>
                        1. You are giving the right permission to third-party-applications in your account settings to interact with your information. Check that <Link href='https://www.spotify.com/us/account/apps/'><u>here</u></Link>!
                    </span>
                    <br /><br />
                    Otherwise we will not be able to access your data and make modifications to your account (like creating a new playlist).
                    <br /><br />
                    <span className='font-bold'>
                        2. Your account didn’t automatically block ‘Jamming app’ permissions
                    </span>
                    <br /><br />
                    This could happen when you make too many new playlists in a short period of time. Our recommendation is to try later.
                    <br /><br />
                    <span className='font-bold'>
                        3. You didn’t block ‘Jamming app’ to connect to your Spotify as third-party-service
                    </span>
                    <br /><br />
                    As you can read in the politics, Spotify gives you as a user the power to block specific third-party-services to establish connections with your account. Make sure you are not blocking the ‘Jamming app’.
                </p>
                <h2 className='header-black underline'>
                    <Link href='../'>Back</Link>
                </h2>
            </section>

        </Background >
    )
}

export default page