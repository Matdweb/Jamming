import React from 'react'
import Background from '../components/Background'

function page() {
    return (
        <Background error={true}>
            <div>Error page :(</div>
        </Background>
    )
}

export default page