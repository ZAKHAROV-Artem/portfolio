import getPlaylist from "#/actions/get/getPlaylist";
import { useQuery } from "@tanstack/react-query";

export const usePlaylist = () => {
  const query = useQuery({
    queryFn: getPlaylist,
    queryKey: ["playlist"],
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return query;
};
