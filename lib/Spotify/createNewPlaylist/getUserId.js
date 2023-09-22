import { SpotifyCredentials } from "../spotifySearchCredentials";

export const getUserId = async (access_token) => {
    const response = await fetch(SpotifyCredentials.USER_ID_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    });
    const { id } = await response.json();
    return id;
};