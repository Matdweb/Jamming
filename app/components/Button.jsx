'use client'
import { useEffect, useState } from 'react'

function Button({ color, toggle = () => { }, children }) {
    const [backgroundHex, setBackgroundHex] = useState(`#707070`);
    const [isBlocked, setIsBlocked] = useState(true);

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
        }, 2500)
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
        handleButtonColor();
    }, [color])

    return (
        <button
            className={`loading-button w-72 sm:h-14 h-12 rounded-full shadow-lg cursor-not-allowed ${!isBlocked ? `cursor-pointer hover:opacity-80 active:scale-95` : ``}`}
            onClick={() => handleToggle()}
            style={{ backgroundColor: backgroundHex }}
        >
            <h1 className='song-title-bold'>{children}</h1>
        </button>
    )
}

export default Button