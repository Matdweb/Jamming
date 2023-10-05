export const addItemsToDefaultPlaylist = async (access_token, playlist_id, songs_uris) => {
    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "uris": songs_uris,
            "position": 0
        })
    });

    const { snapshot_id } = await response.json();

    return { snapshot_id };
}