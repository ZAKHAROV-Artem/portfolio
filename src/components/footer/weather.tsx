"use client";

import { useWeather } from "@/hooks/queries/use-weather";
import wmo from "@/../public/wmo.json";
import Image from "next/image";
export default function Weather() {
  const { data, isSuccess } = useWeather();
  if (!isSuccess) return null;
  return (
    <div className="font-amatic text-center sm:text-left text-white text-3xl">
      <span>In my city now</span>
      <div className=" flex gap-x-3 items-center">
        <span>
          {`${data.data.current.temperature_2m} ${data.data.current_units.temperature_2m}`}
        </span>
        <span>
          {
            wmo[data.data.current.weather_code as keyof typeof wmo][
              data.data.current.is_day ? "day" : "night"
            ].description
          }
        </span>
        <Image
          src={
            wmo[data.data.current.weather_code as keyof typeof wmo][
              data.data.current.is_day ? "day" : "night"
            ].image
          }
          width={40}
          height={40}
          alt="Weather icon"
        />
      </div>
    </div>
  );
}
