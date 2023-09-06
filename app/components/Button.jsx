'use client'
import { useState } from 'react'

function Button({ error, toggle, children }) {
    const [background, setBackground] = useState('#1ED760');

    if(error) setBackground('#D71E1E');

    return (
        <Button className={`w-72 h-14 rounded-bl-3xl bg-[${background}] shadow-xl hover:opacity-80 active:scale-95`} onClick={()=> toggle()}>
            {children}
        </Button>
    )
}

export default Button