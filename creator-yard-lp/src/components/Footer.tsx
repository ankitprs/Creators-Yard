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
          name: "Youtube API",
          urlLink: "https://developers.google.com/youtube/v3/guides/uploading_a_video"
        },
        {
          name: "Google Cloud Storage",
          urlLink: "https://cloud.google.com/storage"
        },
        {
          name: "PostgreSQL",
          urlLink: "https://supabase.com/docs/guides/database/overview"
        },
      ]
    },
    {
      title: "Product",
      links: [
        {
          name: "Features",
          urlLink: "#features"
        },
        {
          name: "Pricing",
          urlLink: "#pricing"
        },
        {
          name: "FAQ's",
          urlLink: "#faq"
        },
      ]
    },
    {
      title: "Support",
      links: [
        {
          name: "Privacy Policy",
          urlLink: "/privacy-policy"
        },
        {
          name: "Terms and conditions",
          urlLink: "/terms-and-conditions"
        },
        {
          name: "Refund Policy",
          urlLink: "/refund-policy"
        },
        {
          name: "Contact Us",
          urlLink: "mailto:ankitpr2001@gmail.com"
        },
      ]
    },
    {
      title: "Address",
      links: [
        {
          name: "Dr B.K. Madhusudhan Neurology Clinics E Block, Kodigehalli Main Rd, Sahakar Nagar, Bengaluru, Karnataka 560092, India",
          urlLink: ""
        }
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
            <div className='flex items-center'>
              <Image src={"/images/logo.png"} width={40} height={40} alt='icon' />
              <p className='text-[22px] font-semibold'>reator Yard</p>
            </div>
            <p className=' my-[35px] text-[#4A4C52]'>Labs  product</p>
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