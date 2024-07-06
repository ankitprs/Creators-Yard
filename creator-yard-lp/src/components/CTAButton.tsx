"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { ArrowIcon } from './icons/ArrowIcon'
import { DEMO_LINK } from '@/utils/Constants'

function CTAButton({ linkUrl = DEMO_LINK, className = "bg-white text-black", classNameForIcon = "", iconColor = undefined }: { linkUrl?: string, className?: string, classNameForIcon?: string, iconColor?: string }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={linkUrl} className={`flex   hover h-[#58] w-fit px-[20px] py-[12px] hover:text-white hover:bg-[#60519e] rounded-[100px] items-center ${className}`} onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
      <p className='mr-[10px]'>Book a demo</p>
      <div className={`w-[32px] h-[32px] rounded-[100px] flex items-center justify-center  ${isHovered ? "bg-white rotate-[-45deg]  duration-100" : "bg-[#8D75E6]"} ${classNameForIcon}`}>
        <ArrowIcon color={iconColor ?? isHovered ? "black" : 'white'} />
      </div>
    </Link>
  )
}

export { CTAButton }