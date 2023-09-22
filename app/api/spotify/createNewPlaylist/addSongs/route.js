import { NextResponse } from "next/server";
import { addItemsToDefaultPlaylist } from "@/lib/Spotify/createNewPlaylist/addItemsToDefaultPlaylist";

export async function POST(request) {
    const { access_token, playlist_id, songs_uris } = await request.json();
    const response = await addItemsToDefaultPlaylist(access_token, playlist_id, songs_uris)

    return NextResponse.json({ response })
}