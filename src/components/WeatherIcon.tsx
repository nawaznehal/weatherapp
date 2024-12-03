import React from 'react'
import Image from "next/image"
import { cn } from '@/utils/cn'

type Props = {}

const WeatherIcon = (
    props: React.HTMLProps<HTMLDivElement> & {iconname: string}) => {
  return (
    <div {...props} className={cn('relative h-20 w-20')}>
        <Image 
        alt='weather icon' 
        width={100}
        height={100}
        className='absolute h-full w-full'
        src={`https://openweathermap.org/img/wn/${props.iconname}@4x.png`}/>
    </div>
  )
}

export default WeatherIcon