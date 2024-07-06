import React from 'react'


interface HeadlineType {
  headline: string,
  subHeading: string,
  className: string,
  classNameSubText?: string
}

function Headline({ headline, subHeading, className = "", classNameSubText = "" }: HeadlineType) {
  return (
    <div className={className}>
      <p className='text-[60px]  font-semibold my-[8px]'>{headline}</p>
      <p className={`text-[18px] text-[#494C51] ${classNameSubText}`}>{subHeading}</p>
    </div>
  )
}

export { Headline }