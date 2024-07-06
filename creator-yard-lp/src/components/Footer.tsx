import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface LinksType {
  title: string,
  links: { name: string, urlLink: string }[]
}
const Links = ({ title, links }: LinksType) => {
  return (<div className='flex flex-col mx-[40px]'>
    <p className='text-white font-medium my-[8px] text-[16px]'>{title}</p>
    {
      links.map(link => <div key={link.name} className='my-[5px]'>
        <Link href={link.urlLink} className='text-[#A0A0A0] hover:text-white text-[15px]'>{link.name}</Link>
      </div>)
    }
  </div>)
}

function Footer() {

  const links: LinksType[] = [
    {
      title: "Resources",
      links: [
        {
          name: "Discover Top Podcasts",
          urlLink: ""
        },
        {
          name: "ChatGPT Prompts for your Podcasts",
          urlLink: ""
        },
        {
          name: "Podcast Growth Blog",
          urlLink: ""
        },
      ]
    },
    {
      title: "Product",
      links: [
        {
          name: "Features",
          urlLink: ""
        },
        {
          name: "Pricing",
          urlLink: ""
        },
        {
          name: "Audiogram",
          urlLink: ""
        },
        {
          name: "Magic Chat",
          urlLink: ""
        },
        {
          name: "Use-Cases",
          urlLink: ""
        },
      ]
    },
    {
      title: "Support",
      links: [
        {
          name: "Privacy Policy",
          urlLink: ""
        },
        {
          name: "Terms and conditions",
          urlLink: ""
        },
        {
          name: "Refund Policy",
          urlLink: ""
        },
        {
          name: "Contact Us",
          urlLink: ""
        },
      ]
    },
    {
      title: "Links",
      links: [
        {
          name: "Free Transcript Generator",
          urlLink: ""
        },
        {
          name: "Free Podcast Summary Generator",
          urlLink: ""
        },
        {
          name: "Free Podcast Show Notes Generator",
          urlLink: ""
        },
        {
          name: "Free Podcast Title Generator",
          urlLink: ""
        },
        {
          name: "Free Podcast Blog Generator",
          urlLink: ""
        },
        {
          name: "Free Youtube Video to Content Generator",
          urlLink: ""
        },
        {
          name: "Free Audio to Content Generator",
          urlLink: ""
        },
        {
          name: "Free Media File to Content Generator",
          urlLink: ""
        },
        {
          name: "Free RSS Feed Summary Generator",
          urlLink: ""
        },
      ]
    },
  ]

  const socialMediaLinks = [
    {
      icon: "/images/instagram.svg",
      link: "",
    },
    {
      icon: "/images/x.svg",
      link: "",
    },
    {
      icon: "/images/youtube.svg",
      link: "",
    }
  ]

  return (
    <div className='w-full bg-[#121212] flex justify-center  text-white'>
      <div className='flex flex-col max-w-[1300px] p-[50px]  '>
        <div className='flex  flex-row mb-[120px] '>
          <div className='w-[300px] flex flex-col '>
            <div className='flex'>
              <Image src={"/images/logo.svg"} width={40} height={40} alt='icon' />
              <div className='flex flex-col'>
                <p className='text-[18px] font-semibold'>PODNOTES</p>
                <p className='text-[10px] font-extralight'>A Wudpecker partner</p>
              </div>
            </div>
            <p className=' my-[35px] text-[#4A4C52]'>a 1811 Labs product</p>
            <div className='flex'>
              {
                socialMediaLinks.map(socialMediaLink => <div key={socialMediaLink.icon}>
                  <Link href={socialMediaLink.link} className='w-[56px] h-[56px] mr-[10px] bg-[#1E1E1E] hover:bg-[#1E1E1E] rounded-full flex justify-center items-center'>
                    <Image src={socialMediaLink.icon} alt='icon' width={32} height={32} />
                  </Link>
                </div>)
              }
            </div>

          </div>
          <div className='flex flex-wrap w-[716px]'>
            {
              links.map(link => <div key={link.title}>
                <Links title={link.title} links={link.links} />
              </div>)
            }
          </div>
        </div>

        <div className='w-full flex justify-bottom border-t-[1px] text-white pt-[50px] border-[#ffffff26]'>
          © 2024 CreatorsYard. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export { Footer }