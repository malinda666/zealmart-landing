import { MailIcon, PhoneIcon } from 'lucide-react'
import React from 'react'
import { Separator } from '../ui/Separator'
import { footerLinks } from '@/data/footerLinks'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full bg-foreground">
      <div className="relative py-6">
        <div className="max-w-screen-lg mx-auto py-8 flex items-center justify-between">
          <h3 className="text-3xl font-semibold">
            Ready to Transform Your Business? <br />
            Take the First Step Today!
          </h3>
          <div className="flex items-center justify-end gap-8 text-sm">
            <div className="flex flex-col items-start">
              <span className="text-primary flex gap-2 items-center mb-1">
                <MailIcon /> E-Mail Us
              </span>
              <a className="text-[#464EFF]" href="mailto:help@zealmart.com">
                help@zealmart.com
              </a>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-primary flex gap-2 items-center mb-1">
                <PhoneIcon /> Call Us
              </span>
              <a className="text-[#464EFF]" href="tel:+94022222282222">
                0222 2228 2222
              </a>
            </div>
          </div>
        </div>
        <Separator />
        <div className="max-w-screen-lg mx-auto py-8 flex flex-col items-start justify-between">
          {footerLinks.map((item, i) => (
            <div className="flex gap-8 items-center justify-start" key={i}>
              <h4 className="text-lg font-semibold min-w-[100px]">
                {item.title}
              </h4>
              {item.links.map((link, j) => (
                <Link
                  href={link.path}
                  key={j}
                  className="text-sm text-border hover:text-primary transition-colors duration-150 ease-in-out"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <Separator />
        <div className="max-w-screen-lg mx-auto pt-4 flex items-center justify-between">
          <div className="relative flex items-center md:min-w-max lg:min-w-[210px]">
            <div className="relative w-[36px] md:w-[48px] min-w-max min-h-[63px] h-full mr-2">
              <Image src="/assets/zealmart-logo.svg" alt="Logo" fill />
            </div>
            <span className="font-bold md:text-lg whitespace-nowrap text-white tracking-normal">
              Zeal Mart
            </span>
          </div>
          <div className="flex items-center justify-end gap-8 text-sm">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-border text-sm"
            >
              Developed By Fortxcore
            </a>
            <span className="underline text-sm text-border">
              Copyright © 2023 Zealmart All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
