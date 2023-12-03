'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'

const marqueeVariants = {
  animate: {
    x: [0, -100],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 1,
        ease: 'linear',
      },
    },
  },
}

const logoCloud = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

const LogoMarquee = () => {
  return (
    <div className="mt-2 w-full overflow-hidden flex items-center justify-center">
      {/* <motion.div
        // variants={marqueeVariants}
        // animate="animate"
        className="w-[220%] flex items-center justify-evenly"
      > */}
      <Marquee
        speed={20}
        gradient
        gradientColor="#1e293b"
        className="overflow-hidden"
      >
        {logoCloud.map((item, i) => (
          <div
            className="relative mr-8 md:mr-0 opacity-50 hover:opacity-100 transition-opacity duration-300 ease-out min-h-[75px] min-w-[60px] md:min-h-[150px] md:min-w-[270px] w-full"
            key={i}
          >
            <Image
              src={'/assets/logos/' + item + '.svg'}
              alt={item + 'logo'}
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                transform: 'scale(1.25)',
              }}
            />
          </div>
        ))}
      </Marquee>
      {/* </motion.div> */}
    </div>
  )
}

export default LogoMarquee
