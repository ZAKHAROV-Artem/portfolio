import getTech from "#/actions/get/getTech";
import { useQuery } from "@tanstack/react-query";

export const useTech = () => {
  const query = useQuery({
    queryKey: ["tech"],
    queryFn: getTech,
  });
  return query;
};
