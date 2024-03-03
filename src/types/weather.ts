type CurrentUnits = {
  time: string;
  interval: string;
  temperature_2m: string;
  is_day: string;
  weather_code: string;
};

type CurrentData = {
  time: string;
  interval: number;
  temperature_2m: number;
  is_day: number;
  weather_code: string;
};

export type WeatherResponse = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: CurrentUnits;
  current: CurrentData;
};
