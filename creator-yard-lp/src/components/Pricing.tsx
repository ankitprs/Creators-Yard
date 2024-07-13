import React from 'react'
import { Headline } from './Headline'
import { CTAButton } from './CTAButton'
import { Switch } from "@/components/ui/switch"
import Link from 'next/link'
import { TickIcon } from './icons/TickIcon'
import { DEMO_LINK } from '@/utils/Constants'

interface PricingCardType {
  planName: string
  planPrice: number
  planLinkUrl: string
  duration: number,
  isHighlighted: boolean
}

const PricingCard = ({ planName, planLinkUrl, planPrice, duration, isHighlighted }: PricingCardType) => {
  const features = [`${duration} GB`, "Unlimited channels", "Unlimited editors", "Unlimited streams"]

  return (<div className={`rounded-[15px] w-[315px] ${isHighlighted ? "bg-[#7F56D9] text-white" : "bg-[#F4F4EE]"} mx-[15px]`}>
    <div className='flex justify-end'>
      <div className={`bg-[#60519E] rounded-tr-[15px] rounded-bl-[5px] text-[12px] px-[15px] py-[7px] w-fit ${isHighlighted ? "block" : "hidden"}`}>Most Popular</div>
    </div>
    <div className='px-[25px] py-[20px]'>
      <div className=''>
        {planName}
        <div className='text-[54px]'>${planPrice} <span className='text-[17px]'>/month</span></div>
      </div>
      <div className='flex flex-col my-[24px]'>
        {
          features.map(feature => <div key={feature} className='my-[5px] flex items-center'>
            <TickIcon color={isHighlighted ? "white" : "#121212"} />
            <p className='ml-[10px]'>{feature}</p>
          </div>)
        }
      </div>
      <CTAButton linkUrl={planLinkUrl} className={`w-full items-center justify-center ${isHighlighted ? "bg-white text-black" : "bg-[#60519e] text-white"}`} classNameForIcon={isHighlighted ? "" : "bg-white"} iconColor={isHighlighted ? undefined : "black"} />
    </div>
  </div>)
}

function Pricing() {
  const plans: PricingCardType[] = [
    { planName: "Starter", planPrice: 49, planLinkUrl: DEMO_LINK, duration: 50, isHighlighted: false },
    { planName: "Pro", planPrice: 99, planLinkUrl: DEMO_LINK, duration: 200, isHighlighted: true },
    { planName: "Agency", planPrice: 999, planLinkUrl: DEMO_LINK, duration: 1000, isHighlighted: false }
  ]
  return (
    <div className='flex flex-col items-center mb-[15px] mt-[100px]' id='pricing'>
      <Headline className='flex flex-col items-center justify-center'
        headline='Pricing Plans'
        subHeading='You can book a demo for free' />

      <div className='flex items-end my-[40px] sm:flex-row flex-col'>
        {
          plans.map(plan => <div key={plan.planName}>
            <PricingCard planName={plan.planName} planLinkUrl={plan.planLinkUrl} planPrice={plan.planPrice} duration={plan.duration} isHighlighted={plan.isHighlighted} />
          </div>)
        }
      </div>
    </div>
  )
}

export { Pricing }