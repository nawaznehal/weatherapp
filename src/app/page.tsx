'use client'

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useQuery } from "react-query";
import axios from "axios";
import { parseISO, format } from "date-fns";
import Container from "@/components/Container";


// https://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=12f027cd4ee845f411db950b53b7261b&cnt=56

type WeatherData = {
  cod: string;
  message: number;
  cnt: number;
  list: Array<{
      dt: number;
      main: {
          temp: number;
          feels_like: number;
          temp_min: number;
          temp_max: number;
          pressure: number;
          sea_level: number;
          grnd_level: number;
          humidity: number;
          temp_kf: number;
      };
      weather: Array<{
          id: number;
          main: string;
          description: string;
          icon: string;
      }>;
      clouds: {
          all: number;
      };
      wind: {
          speed: number;
          deg: number;
          gust: number;
      };
      visibility: number;
      pop: number;
      sys: {
          pod: string;
      };
      dt_txt: string;
  }>;
  city: {
      id: number;
      name: string;
      coord: {
          lat: number;
          lon: number;
      };
      country: string;
      population: number;
      timezone: number;
      sunrise: number;
      sunset: number;
  };
};

export default function Home() {
  const { isLoading, error, data } = useQuery<WeatherData>(
    "repoData", 
    async () =>
  {
    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=12f027cd4ee845f411db950b53b7261b&cnt=56');
    return data;
  }
    // queryKey: ['repoData'],
    // queryFn: () =>
      // fetch('https://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=12f027cd4ee845f411db950b53b7261b&cnt=56').then((res) =>
      //   res.json(),
      // ),
  );

  const firsData = data?.list[0];

  console.log('data', data?.city.country)

  if (isLoading) return (
    <div className="flex items-center min-h-screen justify-center">
    <p className="animate-bounce">Loading....</p>

  </div>
  )
  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar/>
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4"></main>
      {/* todat data */}
      <section></section>
      <div>
      <h2 className="flex gap-1 text-2xl items-end">
        <p>
          {format(parseISO(firsData?.dt_txt ??''), 'EEEE')}
        </p>
        <p className="text-lg">
          ({format(parseISO(firsData?.dt_txt ??''), 'dd.MM.yyy')})
        </p>

      </h2>
      <Container className="gap-10 px-6 items-center"></Container>
      </div>
      {/* 7day data */}
      <section></section>
    </div>
  );
}
