'use client'
import { useState, useEffect } from "react";

function Background({ error=false, children }) {
    const [backgroundHue, setBackgroundHue] = useState(115);

    const changeBackground = () => {
        if (backgroundHue < 360) {
            setBackgroundHue(backgroundHue + 1);
        } else {
            setBackgroundHue(0)
        }
    }

    useEffect(() => {
        if (!error) {
            setTimeout(() => {
                changeBackground();
            }, 100)
        } else {
            setBackgroundHue(0)
        }
    }, [backgroundHue])

    return (
        <div
            className='top-0 left-0 min-h-screen'
            style={{ background: `linear-gradient(180deg, hsla(${backgroundHue}, 100%, 25%) 0%, hsla(137, 3%, 7%, 1) 100%)` }}
        >
            {children}
        </div>
    )
}

export default Background