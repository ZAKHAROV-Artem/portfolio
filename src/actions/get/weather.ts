import { WeatherResponse } from "@/types/weather";
import axios from "axios";

export default async function weather() {
  return axios.get<WeatherResponse>(
    "https://api.open-meteo.com/v1/forecast?latitude=50.0614&longitude=19.9366&current=temperature_2m,is_day,weather_code"
  );
}
