'use client'

import { Button } from '@/components/ui/Button'
import Title from '@/components/ui/Title'
import { cn } from '@/lib/utils'
import { Testimonial } from '@/models'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

type TestimonialSliderProps = {
  title: [string, string]
  items: Testimonial[]
  className?: string
}

const TestimonialSlider = ({
  title,
  items,
  className,
}: TestimonialSliderProps) => {
  const sliderWrapper = useRef<HTMLDivElement>(null)
  const sliderInner = useRef<HTMLDivElement>(null)
  const curTranslate = useRef(0)

  //   const [disabledButton, setDisabledButton] = useState("")

  useEffect(() => {
    if (!sliderWrapper.current) {
      return
    }

    const sliderItems = sliderWrapper.current.querySelectorAll('#slide--item')
    const sliderLength = sliderItems[0].getBoundingClientRect().width + 16

    console.log(sliderWrapper.current, sliderLength)
  }, [])

  const moveSlide = (dir: number) => {
    if (!sliderWrapper.current || !sliderInner.current) {
      return
    }

    const sliderItems = sliderWrapper.current.querySelectorAll('#slide--item')
    const sliderLength = sliderItems[0].getBoundingClientRect().width
    const amount = Math.min(
      Math.max(0, curTranslate.current + (sliderLength + 16) * dir),
      (sliderLength + 16) * 3
    )

    // console.log(amount)

    sliderInner.current.style.transform = `translate3d(${-amount}px, 0,0)`

    curTranslate.current = amount
  }

  return (
    <div
      className={cn(
        'w-full overflow-hidden relative flex flex-col items-start justify-start mt-16',
        className
      )}
    >
      <div className="w-full flex items-center justify-between relative">
        <Title title={title} />
        <div className="hidden md:flex items-center justify-end gap-2">
          <Button size="icon" variant="dark" onClick={() => moveSlide(-1)}>
            <ChevronLeft />
          </Button>
          <Button size="icon" variant="dark" onClick={() => moveSlide(1)}>
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div
        className="w-full mt-8 pr-4 py-4 overflow-x-auto md:overflow-hidden"
        ref={sliderWrapper}
      >
        <div
          className="w-full flex items-start gap-8 pr-4 will-change-transform transition-transform duration-300 ease-in-out"
          ref={sliderInner}
        >
          {items.map((item, i) => (
            <div
              className="p-4 rounded-3xl bg-foreground min-w-[75vw] md:min-w-[300px] h-full aspect-[5/6] flex flex-col items-center justify-between"
              key={i}
              id="slide--item"
            >
              <p className="p-4 text-border text-sm">{`"${item.message}"`}</p>
              <div className="flex flex-col w-full p-3">
                <div className="w-full h-[2px] bg-gradient-to-r from-primary via-transparent to-primary mb-4" />
                <div className="flex items-center w-full">
                  <div className="relative w-full aspect-square max-w-[60px] mr-3">
                    <Image src={item.avatar} fill alt="features" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <h3 className="text-sm">{item.username}</h3>
                    <span className="text-[0.65rem] text-border">
                      {item.designation}
                    </span>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((r) => (
                        <Image
                          src="/assets/svg/ph_star-fill.svg"
                          width={12}
                          height={12}
                          alt="features"
                          key={r}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute -right-2 top-16 h-full w-[25%] bg-gradient-to-l from-background via-transparent to-transparent" />
      </div>
    </div>
  )
}

export default TestimonialSlider
