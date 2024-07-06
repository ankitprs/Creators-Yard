import React from 'react'
import { Headline } from './Headline'
import Image from 'next/image'


interface FeatureItemType {
  image: string, title: string, subTitle: string,
  isImageOnRight: boolean,
  details: { detailName: string, detailDescription: string }[]
}

const FeatureItem = ({ image, title, subTitle, details, isImageOnRight }: FeatureItemType) => {

  const ImageSection = () => {
    return (<div className='flex items-center justify-center rounded-[40px] mx-[50px] w-[504px] h-[535px]'>
      <Image src={image} alt='icon' className='w-[504px] h-[535px] rounded-[40px]' width={504} height={535} />
    </div>)
  }

  const TextSection = () => {
    return (<div className='max-w-[527px]'>
      <p className='text-[55px] mb-[8px]'>{title}</p>
      <p className='text-[#4A4C52] font-light text-[17px]'>{subTitle}</p>
      <div className='flex flex-col'>
        {
          details.map((item) => <div key={item.detailName} className='flex mt-[15px]'>
            <div className='bg-[#7F56D9] w-[24px] h-[24px]  items-center justify-center rounded-full'>
              <Image src="/images/tick.svg" className='w-full h-full' alt='icon' width={14} height={14} />
            </div>
            <div className='ml-[10px] flex-1'>
              <p className='text-[20px]'>{item.detailName}</p>
              <p className='text-[#4A4C52] font-light text-[17px]'>{item.detailDescription}</p>
            </div>
          </div>)
        }
      </div>
    </div>)
  }

  return (
    <div className='flex flex-row my-[80px]'>
      {
        isImageOnRight ? <>
          <TextSection />
          <ImageSection />
        </> : <>
          <ImageSection />
          <TextSection />
        </>
      }
    </div>
  )
}


function Features() {
  const assets: FeatureItemType[] = [
    {
      image: "/images/ss.svg", title: "Creator", subTitle: "With Magic Chat, use contextual search and QnA to use Podnotes as an assistant to glance through all your podcasts at once.",
      details: [
        { detailName: "Chat with all the Podcasts", detailDescription: "Effortlessly produce compelling articles that captivate your audience." },
        { detailName: "Chat with an Individual Podcast", detailDescription: "With AI by your side, you can generate blog content that not only informs but also resonates with your readers." },
        { detailName: "Create Captivating Social media updates", detailDescription: "Transform your social media presence with captivating updates that spark conversations and drive engagement." }
      ],
      isImageOnRight: true
    },
    {
      image: "/images/editorss.svg", title: "Editor", subTitle: "Create snippets of your podcast into easily shareable and visually appealing asset to share on your social media",
      details: [
        { detailName: "Images", detailDescription: "Add high-quality images to illustrate your narrative, reinforce key points, and enhance the overall visual appeal of your content." },
        { detailName: "Videos", detailDescription: "Embed videos to provide in-depth explanations, tutorials, or dynamic storytelling that resonates with your audience." },
        { detailName: "Infographics", detailDescription: "Present complex information in a visually appealing and easily digestible format through infographics." }
      ],
      isImageOnRight: false
    },

  ]
  return (
    <div className='max-w-[1120px] my-[80px]' id='features'>
      <Headline
        className='flex flex-col items-center'
        headline='Features'
        subHeading="Delve into a comprehensive display of our platform's capabilities"
      />
      <div className='grid  my-[50px]'>
        {
          assets.map(asset => <div key={asset.title} className='flex  items-center'>
            <FeatureItem image={asset.image} title={asset.title} subTitle={asset.subTitle} details={asset.details} isImageOnRight={asset.isImageOnRight} />
          </div>)
        }
      </div>
    </div>
  )
}

export { Features }