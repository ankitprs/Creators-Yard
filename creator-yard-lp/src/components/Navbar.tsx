import { DEMO_LINK } from '@/utils/Constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar({ className = "" }) {
  const navigationOptions = [
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "FAQ", link: "#faq" }
  ]
  return (
    <div className={`flex text-white h-[72px] items-center w-full ${className}`}>
      <div className='flex flex-1 items-center'>
        <Image src={"/images/logo.png"} width={40} height={40} alt='icon' />
        <p className='text-[24px] font-semibold'>reator Yard</p>
      </div>
      <div className='flex h-[72px] items-center justify-between text-[14px] '>
        {
          navigationOptions.map(option => <Link href={option.link} key={option.name} className='text-[#ffffff62] hover:text-white mr-[30px]'>{option.name}</Link>)
        }
        <Link href={DEMO_LINK} className=' border-[#FFFFFF] border-[1px] flex items-center  px-[24px] h-[42px] rounded-[100px] hover:bg-[#60519e]'>Book a demo</Link>
      </div>
    </div>
  )
}

export default Navbar