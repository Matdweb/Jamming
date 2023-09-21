import { createNewDefaultPlaylist } from "./createNewDefaultPlaylist";

const createNewPlaylist = async (access_token, playlist_name, songs) => {
    const playlist_id = await createNewDefaultPlaylist(access_token, playlist_name);
    const songs_uris = songs.map((song)=> song.uri);

    const response = await fetch('api/spotify/createNewPlaylist/addSongs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/npm rjson',
        },
        body: JSON.stringify({
            access_token,
            playlist_id,
            songs_uris
        })
    })

    const data = await response.json();
    return data;
}

export default createNewPlaylist;