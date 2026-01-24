import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link href={'/'} className='flex items-center gap-1'>
        <Image alt='logo-hero-kidz' src={'/assets/logo.png'} width={50} height={40} />
        <h2 className='text-xl font-bold'><span className='text-primary'>Hero Kidz</span></h2>
    </Link>
  )
}
