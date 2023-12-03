'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo } from 'react'
import { Separator } from '../ui/Separator'
import { Button } from '../ui/Button'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/Sheet'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

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
  const pathname = usePathname()

  return (
    <header className="sticky z-50 w-full px-4 lg:px-8 py-2 md:py-4 bg-foreground">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
        <div className="relative flex items-center md:min-w-max lg:min-w-[210px]">
          <Link href="/">
            <div className="relative w-[150px] aspect-[2764/916] h-full mr-2 mb-3 md:mb-0">
              <Image
                src="/assets/Zeal Mart Logo-Coloured.png"
                alt="Logo"
                fill
              />
            </div>
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-center gap-4">
          {menuItems.map((item) => (
            <Link href={item.path} key={item.name} className="">
              <span
                className={cn(
                  'text-secondary hover:text-primary transition-colors duration-150 text-sm whitespace-nowrap',
                  pathname.toLowerCase() === item.path.toLowerCase()
                    ? 'underline'
                    : ''
                )}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center justify-end gap-4 md:min-w-max lg:min-w-[210px]">
          <Button variant="ghost">Log In</Button>
          <Separator orientation="vertical" />
          <Button>Try Zealmart</Button>
        </div>
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>
                  <div className="relative flex items-center justify-center md:min-w-max lg:min-w-[210px]">
                    <div className="relative w-[36px] md:w-[48px] min-w-max min-h-[63px] h-full mr-2">
                      <Image src="/assets/zealmart-logo.svg" alt="Logo" fill />
                    </div>
                    <span className="font-bold md:text-lg whitespace-nowrap text-white tracking-normal">
                      Zeal Mart
                    </span>
                  </div>
                </SheetTitle>
                <SheetDescription asChild>
                  <div className="flex flex-col items-center justify-center gap-4">
                    {menuItems.map((item) => (
                      <Link href={item.path} key={item.name} className="">
                        <span className="text-secondary hover:text-primary transition-colors duration-150 text-sm whitespace-nowrap">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                    <div className="flex items-center justify-center gap-4 mt-8">
                      <Button variant="secondary">Log In</Button>
                      <Button>Try Zealmart</Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
