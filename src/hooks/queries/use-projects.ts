import getProjects from "#/actions/get/getProjects";
import { useQuery } from "@tanstack/react-query";

export const useProjects = () => {
  const query = useQuery({
    queryFn: getProjects,
    queryKey: ["projects"],
  });
  return query;
};
