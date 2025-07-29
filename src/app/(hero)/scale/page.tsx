import React from 'react'
import Hero from '@/components/hero'
import scaleSrc from '../../../../public/scale.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scale'
}

export default function page() {
  return (
    <Hero imgUrl={scaleSrc} altTxt='scale' content='Scale Page~~~' />
  )
}
