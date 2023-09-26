'use client'
import { useEffect, useState } from 'react'

function Button({ color, toggle = async () => { }, children }) {
    const [backgroundHex, setBackgroundHex] = useState(`#707070`);
    const [isBlocked, setIsBlocked] = useState(true);
    const [loadAnimation, setLoadAnimation] = useState(false);

    const handleButtonColor = () => {
        switch (color) {
            case 'green': handleSuccessful(); break;

            case 'gray': handleLoading(); break;

            case 'red': handleError(); break;

            default: setBackgroundHex(`#00000`); setIsBlocked(false);
        }
    }

    const handleError = () => {
        setBackgroundHex(`#D71E1E`);
        setIsBlocked(true);
        setTimeout(()=> {
            setBackgroundHex(`#1ED760`);
            setIsBlocked(false);
        }, 3000)
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
           const res = await toggle();
            if(res) setLoadAnimation(true);
            setTimeout(()=> {setLoadAnimation(false)}, 3000)
        }
    }

    useEffect(() => {
        handleButtonColor();
    }, [color])

    return (
        <button
            className={` w-72 sm:h-14 h-12 rounded-full shadow-lg cursor-not-allowed ${!isBlocked ? `cursor-pointer hover:opacity-80 active:scale-95` : ``} ${loadAnimation ? `loading-button` : ``}`}
            onClick={() => handleToggle()}
            style={{ backgroundColor: backgroundHex }}
        >
            <h1 className='song-title-bold'>{children}</h1>
        </button>
    )
}

export default Button