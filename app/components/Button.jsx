'use client'
import { useEffect, useState } from 'react'

function Button({ state, toggle=()=>{}, children }) {
    const [backgroundHex, setBackgroundHex] = useState(`#707070`);

    useEffect(() => {
        switch (state) {
            case 'successful': setBackgroundHex(`#1ED760`)
                break;
            case 'loading': setBackgroundHex(`#707070`)
                break;
            case 'error': setBackgroundHex(`#D71E1E`)
                break;
            default: setBackgroundHex(`#707070`);
        }
    }, [state])

    return (
        <button 
        className={`w-72 sm:h-14 h-12 rounded-full shadow-lg hover:opacity-80 active:scale-95`} 
        onClick={() => toggle()}
        style={{backgroundColor: backgroundHex}}
        >
            <h1 className='song-title-bold'>{children}</h1>
        </button>
    )
}

export default Button