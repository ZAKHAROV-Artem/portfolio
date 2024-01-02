import { PlaylistRes } from "@/types/response";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const res = await axios
      .get<PlaylistRes>(
        `${process.env.NEXT_PUBLIC_YOUTUBE_API_URL}&playlistId=${process.env.NEXT_PUBLIC_PLAYLIST_ID}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
      )
      .then((res) => res.data);

    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json("Something went wrong :(");
  }
}
