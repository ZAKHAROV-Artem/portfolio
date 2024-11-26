type CurrentUnits = {
  interval: string;
  is_day: string;
  temperature_2m: string;
  time: string;
  weather_code: string;
};

type CurrentData = {
  interval: number;
  is_day: number;
  temperature_2m: number;
  time: string;
  weather_code: string;
};

export type WeatherResponse = {
  current: CurrentData;
  current_units: CurrentUnits;
  elevation: number;
  generationtime_ms: number;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
};
