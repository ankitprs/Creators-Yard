import Image from 'next/image'
import React from 'react'
import { CTAButton } from './CTAButton'
import Navbar from './Navbar'

function HeroSection() {
  return (
    <div className='bg-[#402E7A] w-full flex justify-center'>
      <div className='max-w-[1120px] '>
        <Navbar className='' />
        <div className='  text-white flex sm:flex-row h-screen  py-[64px] flex-col w-full'>
          <div className='flex flex-1 justify-start w-full'>
            <div className=' flex flex-col mr-[20px] max-w-[600px]'>
              <p className='text-[74px] font-medium leading-[1.28]'>Collaboration tools for  <span className='px-[24px] mx-[px] rounded-[100px] bg-[#7167b7] text-center'>Youtubers</span></p>
              <p className=' my-[30px] text-[16px] max-w-[374px] font-light'>
                Collaborate with your editors and publish directly to YouTube without the need for downloads.
              </p>
              <CTAButton />
            </div>
          </div>

          <div className='flex flex-col items-start  max-w-[400px]'>
            <Image src={"/images/front_screen_icon.png"} alt='' width={497} height={497} className='rounded-3xl w-full h-fit mt-[30px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export { HeroSection }