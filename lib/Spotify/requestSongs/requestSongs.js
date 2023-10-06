import { AppEndpoints } from "../spotifySearchCredentials";

const requestSongs = async (access_token, input) => {

    try {
        const songs = fetch(AppEndpoints.REQUEST_SONGS_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                access_token,
                searchInput: input,
            })
        })
            .then(response => response.json())
            .then(data => data.songs)

        return await songs;
    } catch (e) {
        console.log(e);
        return [];
    }
}

export default requestSongs;