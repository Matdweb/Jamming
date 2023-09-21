import { getUserId } from "./getUserId";

export const createNewDefaultPlaylist = async (access_token, playlist_name="New Playlist") => {
    const user_id = await getUserId(access_token);
    const response = await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            "name": playlist_name,
            "description": "Jamming New playlist defualt description",
            "public": false
        })
    })

    const { id } = await response.json();
    return id;
}
