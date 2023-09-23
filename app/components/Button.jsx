'use client'
import { useEffect, useState, useContext } from 'react'
import { SpotifyContext } from '@/context/SpotifyContextProvider';

function Button({ state, toggle = () => { }, children }) {
    const [backgroundHex, setBackgroundHex] = useState(`#707070`);
    const [isBlocked, setIsBlocked] = useState(true);

    const handleButtonState = () => {
        switch (state) {
            case 'successful': handleSuccessful(); break;

            case 'loading': handleLoading(); break;

            case 'error': handleError(); break;

            default: setBackgroundHex(`#707070`); setIsBlocked(false);
        }
    }

    const handleError = () => {
        setBackgroundHex(`#D71E1E`);
        setIsBlocked(true);
        setTimeout(()=> {
            setBackgroundHex(`#1ED760`);
            setIsBlocked(false);
        }, 4000)
    }

    const handleLoading = () => {
        setBackgroundHex(`#707070`);
        setIsBlocked(true);
    }

    const handleSuccessful = () => {
        setBackgroundHex(`#1ED760`)
        setIsBlocked(false);
    }

    const handleToggle = async () => {
        if (!isBlocked) {
            toggle();
        }
    }

    useEffect(() => {
        handleButtonState();
    }, [state])

    return (
        <button
            className={`w-72 sm:h-14 h-12 rounded-full cursor-blocked shadow-lg hover:opacity-80 active:scale-95 ${isBlocked ? `cursor-not-allowed active:scale-100 hover:opacity-100` : ''}`}
            onClick={() => handleToggle()}
            style={{ backgroundColor: backgroundHex }}
        >
            <h1 className='song-title-bold'>{children}</h1>
        </button>
    )
}

export default Button