'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [count, setCount] = useState(0)
  const pathname = usePathname()

  const linkData = [
    {
      label: 'About',
      href: '/dashboard/about'
    },
    {
      label: 'Settings',
      href: '/dashboard/settings'
    }
  ];
  console.log(pathname)
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
      <div className="flex gap-4 font-bold text-lg mb-4">
        {linkData.map((link) => (
          <Link
            key={link.href}
            className={pathname === link.href ? 'text-purple-500' : ''}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <h2>Dashboard Layout {count}</h2>
      <button className="bg-blue-500 text-white p-2 rounded-md my-4" onClick={() => setCount(count + 1)}>Increment</button>
      {children}
    </div>
  )
}
