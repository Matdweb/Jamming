//client credentials
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
//String created combining the client credentials in a base64 string
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
//TOKEN_ENDOPOINT the url to make the access token request 
const SPOTIFY_TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const BASE_URL = `https://api.spotify.com/v1`
const USER_ID_ENDPOINT = `https://api.spotify.com/v1/me`
const ADD_SONGS_ENDPOINT = `api/spotify/createNewPlaylist/addSongs`;
const ACCESS_TOKEN_ENDPOINT = `api/spotify/accessToken`;
const REQUEST_SONGS_ENDPOINT = `api/spotify/requestSongs`;

export const SpotifyCredentials = {
    BASE_URL,
    client_id,
    client_secret,
    basic,
    SPOTIFY_TOKEN_ENDPOINT,
    USER_ID_ENDPOINT,
}

export const AppEndpoints = {
    ADD_SONGS_ENDPOINT,
    ACCESS_TOKEN_ENDPOINT,
    REQUEST_SONGS_ENDPOINT
}