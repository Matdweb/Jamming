//client credentials
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
//String created combining the client credentials in a base64 string
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
//TOKEN_ENDOPOINT the url to make the access token request 
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export const SpotifyCredentials = {
    client_id,
    client_secret,
    basic,
    TOKEN_ENDPOINT,
}