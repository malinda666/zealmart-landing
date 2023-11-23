import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Separator } from '../ui/Separator'
import { Button } from '../ui/Button'

const menuItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Features',
    path: '/features',
  },
  {
    name: 'Pricing',
    path: '/pricing',
  },
  {
    name: 'Contact Us',
    path: '/contact-us',
  },
]

const Header = () => {
  return (
    <header className="relative w-full px-8 py-4 bg-foreground">
      <div className="container mx-auto flex items-center justify-between">
        <div className="relative flex items-center min-w-[210px]">
          <div className="relative w-[48px] min-w-max min-h-[63px] h-full mr-2">
            <Image src="/assets/zealmart-logo.svg" alt="Logo" fill />
          </div>
          <span className="font-bold text-lg text-white tracking-normal">
            Zeal Mart
          </span>
        </div>
        <div className="flex items-center justify-center gap-4">
          {menuItems.map((item) => (
            <Link href={item.path} key={item.name} className="">
              <span className="text-secondary hover:text-primary transition-colors duration-150 text-sm">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-end gap-4 min-w-[210px]">
          <Button variant="ghost">Log In</Button>
          <Separator orientation="vertical" />
          <Button>Try Zealmart</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
