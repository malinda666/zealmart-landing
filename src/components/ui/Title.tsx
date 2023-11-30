import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'

type TitleProps = {
  title: [string, string]
  className?: string
}

const titleVariants = cva('font-semibold', {
  variants: {
    size: {
      default: 'text-3xl',
      big: 'text-3xl md:text-5xl',
    },
    align: {
      default: 'text-center md:text-start',
      center: 'text-center',
    },
  },
  defaultVariants: {
    size: 'default',
    align: 'default',
  },
})

const Title = ({
  title,
  className,
  size,
  align,
}: TitleProps & VariantProps<typeof titleVariants>) => {
  return (
    <h2 className={cn(titleVariants({ size, align, className }))}>
      {title[0]} <span className="text-primary">{title[1]}</span>
    </h2>
  )
}

export default Title
