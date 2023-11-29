import React from 'react'

type TitleProps = {
  title: [string, string]
}

const Title = ({ title }: TitleProps) => {
  return (
    <h2 className="text-3xl font-semibold text-center md:text-start">
      {title[0]} <span className="text-primary">{title[1]}</span>
    </h2>
  )
}

export default Title
