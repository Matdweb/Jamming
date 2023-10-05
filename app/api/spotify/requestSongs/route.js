import { NextResponse } from "next/server";
import { SpotifyCredentials } from "@/lib/Spotify/spotifySearchCredentials";

export async function POST(request) {
    const { access_token, searchInput } = await request.json();

    const response = await fetch(`${SpotifyCredentials.BASE_URL}/search?q=${searchInput}&type=track&limit=15`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    const data = await response.json();
    const songs = data.tracks.items.map((item) => {
        return {
            id: item.id,
            song_name: item.name,
            artist: item.artists[0].name,
            album: item.album.name,
            uri: item.uri
        }
    });

    return NextResponse.json({ songs })
}