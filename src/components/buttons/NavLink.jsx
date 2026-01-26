"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavLink({ href, children }) {
  const path = usePathname();
  const isActive = href === "/" ? path === "/" : path.startsWith(href);

  return (
    <Link 
      className={`${isActive ? 'text-primary' : 'text-base-content'} font-medium`} 
      href={href}
    >
      {children}
    </Link>
  )
}