'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const marqueeVariants = {
  animate: {
    x: [0, -270],
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
    <div className="mt-2 w-full overflow-hidden max-w-screen-xl flex items-center justify-center">
      <motion.div
        // variants={marqueeVariants}
        // animate="animate"
        className="w-full flex items-center justify-evenly"
      >
        {logoCloud.map((item) => (
          <div
            className="relative opacity-50 hover:opacity-100 transition-opacity duration-300 ease-out min-h-[75px] min-w-[60px] md:min-h-[150px] md:min-w-[270px] w-full"
            key={item}
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
      </motion.div>
    </div>
  )
}

export default LogoMarquee
