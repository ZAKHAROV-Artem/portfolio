import { PlaylistRes } from "@/types/response";
import axios from "axios";

export default async function getPlaylist() {
  return await axios.get<PlaylistRes | string>(`/api/playlist`);
}
