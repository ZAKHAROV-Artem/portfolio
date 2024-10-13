import weather from "@/actions/get/weather";
import { useQuery } from "@tanstack/react-query";

export const useWeather = () => {
  const query = useQuery({ queryFn: weather, queryKey: ["weather"] });
  return query;
};
