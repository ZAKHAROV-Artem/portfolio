import { useQuery } from "@tanstack/react-query";
import getProjects from "#/actions/get/getProjects";

export const useProjects = () => {
  const query = useQuery({
    queryFn: getProjects,
    queryKey: ["projects"],
  });
  return query;
};
