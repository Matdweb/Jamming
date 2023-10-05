import { AppEndpoints } from "../spotifySearchCredentials";

const requestAccessToken = async (refresh_token, setAccessToken) => {

    const response = await fetch(AppEndpoints.ACCESS_TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            refresh_token,
        })
    });

    try {
        const data = await response.json();
        
        setAccessToken(data.access_token);
        handleAccessTokenExpiration(data.expires_in, setAccessToken)
        return data.access_token;
    } catch (e) {
        console.log(e);
        return null;
    }
}

const handleAccessTokenExpiration = async (time, setAccessToken) => {
    setTimeout(() => {
      setAccessToken(null);
      console.log('token expired')
    }, time*1000)
  }


export default requestAccessToken;