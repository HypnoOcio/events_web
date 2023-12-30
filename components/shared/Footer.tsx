
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col 
      gap-4 p5 text-center sm:flex-row'>
        <Link href='/'>
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}>
          </Image>
        </Link>
        <p>2023 Evently. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer