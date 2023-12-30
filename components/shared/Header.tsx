
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image 
            width={128}
            height={128}
            src="/assets/images/logo.svg" 
            alt="Evently Logo"/>
        </Link>
        <div className="flex justify-end gap-6">
          <SignedIn>
            <nav className='hidden md:block'>
              <NavItems />
            </nav>
          </SignedIn>

          <SignedIn>
            <UserButton afterSignOutUrl='/' />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header