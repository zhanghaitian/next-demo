import Image from 'next/image'
import React from 'react'
import homeSrc from '../../../public/home.jpg'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home'
}

export default function page() {
  return (
    <Hero imgUrl={homeSrc} altTxt='home' content='Professional Cloud Hosting' />
  )
}
