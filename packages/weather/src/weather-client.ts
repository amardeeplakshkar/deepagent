import {
  AIFunctionsProvider,
  assert,
  getEnv,
  sanitizeSearchParams
} from '@agentic/core'
import defaultKy, { type KyInstance } from 'ky'

export namespace weatherapi {
  export const BASE_URL = 'https://api.weatherapi.com/v1'

  export interface CurrentWeatherResponse {
    current: CurrentWeather
    location: WeatherLocation
  }

  export interface CurrentWeather {
    cloud: number
    condition: WeatherCondition
    feelslike_c: number
    feelslike_f: number
    gust_kph: number
    gust_mph: number
    humidity: number
    is_day: number
    last_updated: string
    last_updated_epoch: number
    precip_in: number
    precip_mm: number
    pressure_in: number
    pressure_mb: number
    temp_c: number
    temp_f: number
    uv: number
    vis_km: number
    vis_miles: number
    wind_degree: number
    wind_dir: string
    wind_kph: number
    wind_mph: number
  }

  export interface WeatherCondition {
    code: number
    icon: string
    text: string
  }

  export interface WeatherLocation {
    country: string
    lat: number
    localtime: string
    localtime_epoch: number
    lon: number
    name: string
    region: string
    tz_id: string
  }

  export interface WeatherIPInfoResponse {
    ip: string
    type: string
    continent_code: string
    continent_name: string
    country_code: string
    country_name: string
    is_eu: string
    geoname_id: number
    city: string
    region: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
  }

  export interface ForecastResponse {
    location: WeatherLocation
    current: CurrentWeather
    forecast: Forecast
  }

  export interface Forecast {
    forecastday: ForecastDay[]
  }

  export interface ForecastDay {
    date: string
    date_epoch: number
    day: DayWeather
    astro: Astro
    hour: HourWeather[]
  }

  export interface DayWeather {
    maxtemp_c: number
    maxtemp_f: number
    mintemp_c: number
    mintemp_f: number
    avgtemp_c: number
    avgtemp_f: number
    maxwind_mph: number
    maxwind_kph: number
    totalprecip_mm: number
    totalprecip_in: number
    totalsnow_cm: number
    avgvis_km: number
    avgvis_miles: number
    avghumidity: number
    daily_will_it_rain: number
    daily_chance_of_rain: number
    daily_will_it_snow: number
    daily_chance_of_snow: number
    condition: WeatherCondition
    uv: number
  }

  export interface Astro {
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
    moon_phase: string
    moon_illumination: number
    is_moon_up: number
    is_sun_up: number
  }

  export interface HourWeather {
    time_epoch: number
    time: string
    temp_c: number
    temp_f: number
    condition: WeatherCondition
    wind_mph: number
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    pressure_in: number
    precip_mm: number
    precip_in: number
    snow_cm: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    windchill_c: number
    windchill_f: number
    heatindex_c: number
    heatindex_f: number
    dewpoint_c: number
    dewpoint_f: number
    will_it_rain: number
    chance_of_rain: number
    will_it_snow: number
    chance_of_snow: number
    vis_km: number
    vis_miles: number
    gust_mph: number
    gust_kph: number
    is_day: number
    uv: number
  }
}

/**
 * Simple Weather API client for accessing weather data based on location.
 *
 * @see https://www.weatherapi.com
 */
export class WeatherClient extends AIFunctionsProvider {
  protected readonly ky: KyInstance
  protected readonly apiKey: string
  protected readonly apiBaseUrl: string

  constructor({
    apiKey = getEnv('WEATHER_API_KEY'),
    apiBaseUrl = weatherapi.BASE_URL,
    ky = defaultKy
  }: {
    apiKey?: string
    apiBaseUrl?: string
    ky?: KyInstance
  } = {}) {
    assert(
      apiKey,
      'WeatherClient missing required "apiKey" (defaults to "WEATHER_API_KEY")'
    )
    super()

    this.apiKey = apiKey
    this.apiBaseUrl = apiBaseUrl

    this.ky = ky.extend({ prefixUrl: apiBaseUrl })
  }

  /**
   * Gets info about the current weather at a given location.
   */
  async getCurrentWeather(queryOrOptions: string | { q: string }) {
    const options =
      typeof queryOrOptions === 'string'
        ? { q: queryOrOptions }
        : queryOrOptions

    return this.ky
      .get('current.json', {
        searchParams: sanitizeSearchParams({
          key: this.apiKey,
          ...options
        })
      })
      .json<weatherapi.CurrentWeatherResponse>()
  }
  /**
   * Gets the weather forecast for a given location.
   */
  async getForecastWeather(
    queryOrOptions:
      | string
      | { q: string; days?: number; aqi?: 'yes' | 'no'; alerts?: 'yes' | 'no' }
  ) {
    const options =
      typeof queryOrOptions === 'string'
        ? { q: queryOrOptions }
        : queryOrOptions

    return this.ky
      .get('forecast.json', {
        searchParams: sanitizeSearchParams({
          key: this.apiKey,
          ...options
        })
      })
      .json<weatherapi.ForecastResponse>()
  }
}
