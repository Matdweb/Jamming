import SpotifyProvider from 'next-auth/providers/spotify'
import { SpotifyCredentials } from '@/lib/Spotify/spotifySearchCredentials';

export default {
    providers: [
        SpotifyProvider({
            authorization:
                'https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,playlist-modify-private,playlist-modify-public',
            clientId: SpotifyCredentials.client_id,
            clientSecret: SpotifyCredentials.client_secret,
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.refresh_token;
            }
            return token;
        },
        async session(session, user) {
            session.user = user;
            return session;
        },
    },
}; 