"use client";

import wmo from "@/../public/wmo.json";
import { useWeather } from "@/hooks/queries/use-weather";
import Image from "next/image";
export default function Weather() {
  const { data, isSuccess } = useWeather();
  if (!isSuccess) return null;
  return (
    <div className="text-center font-amatic text-3xl text-white sm:text-left">
      <span>In my city now</span>
      <div className=" flex items-center gap-x-3">
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
          alt="Weather icon"
          height={40}
          src={
            wmo[data.data.current.weather_code as keyof typeof wmo][
              data.data.current.is_day ? "day" : "night"
            ].image
          }
          width={40}
        />
      </div>
    </div>
  );
}
