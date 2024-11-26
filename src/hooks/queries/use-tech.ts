import getTech from "#/actions/get/getTech";
import { useQuery } from "@tanstack/react-query";

export const useTech = () => {
  const query = useQuery({
    queryFn: getTech,
    queryKey: ["tech"],
  });
  return query;
};
