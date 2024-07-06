import React from 'react'
import { Headline } from './Headline'
import Image from 'next/image'


function TrustedBy() {
  const companies = [
    { id: "1", icon: "" },
    { id: "2", icon: "" },
    { id: "3", icon: "" },
  ]
  return (
    <div className='w-full bg-[#FDFDFB] flex justify-center pt-[100px]'>
      <div className='max-w-[1120px] my-[80px]'>
        <Headline
          className='flex flex-col items-center'
          headline='Trusted by top Engineers'
          subHeading="Security checked by top MNCs Software engineers"
        />
        <div className='flex  my-[50px]'>
          {
            companies.map(company => <div key={company.id}>
            </div>)
          }
        </div>
      </div>
    </div>
  )
}

export { TrustedBy }