'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function DashboardTemplate({ children }: Readonly<{ children: React.ReactNode }>) {
  const [count, setCount] = useState(0)
  return (
    <div className="border-2 border-dashed border-black p-4 mx-auto mt-10">
      <h2>Dashboard Template {count}</h2>
      <button className="bg-blue-500 text-white p-2 rounded-md my-4" onClick={() => setCount(count + 1)}>Increment</button>
      {children}
    </div>
  )
}
