import { useQuery } from "@tanstack/react-query";
import getTech from "#/actions/get/getTech";

export const useTech = () => {
  const query = useQuery({
    queryFn: getTech,
    queryKey: ["tech"],
  });
  return query;
};
