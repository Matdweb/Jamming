
function LogIn() {
    return (
        <section className='w-full flex justify-center items-center px-9 pb-20'>
            <div className='mt-16 sm:mt-36 px-4 sm:px-6 py-8 shadow-black max-w-[37rem] rounded-[2.5rem] flex justify-center items-center flex-col flex-nowrap bg-black/70'>
                <h3 className='text-center title-bold mb-6 sm:mb-8'>Login to create new awesome custome playlists</h3>
                <p className='mb-24 sm:mb-16'>Click now to Log In with your Spotify account!</p>
                <button className='btn-spotify' />
            </div>
        </section>
    )
}

export default LogIn