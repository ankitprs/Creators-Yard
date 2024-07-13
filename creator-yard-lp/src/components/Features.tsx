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
    <div className='flex sm:flex-row my-[10px] flex-col '>
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
      image: "/images/ss.svg", title: "Creators", subTitle: "Efficient Collaboration: Easily invite editors and collaborate on projects in real-time.",
      details: [
        { detailName: "Real-time Collaboration", detailDescription: "Work together with your editors in real-time, making instant changes and improvements to your content without delays." },
        { detailName: "Direct Publishing", detailDescription: "Publish your final content directly to YouTube from our platform, eliminating the need for additional downloads and uploads." },
        { detailName: "Content Management", detailDescription: "Organize and manage all your content in one place, ensuring easy access and tracking of your projects and their progress." },
      ],
      isImageOnRight: true
    },
    {
      image: "/images/editorss.svg", title: "Editors", subTitle: "Provide editors with the tools they need to enhance and streamline the content creation process.",
      details: [
        { detailName: "Efficient Review System", detailDescription: "Review and edit content seamlessly with integrated tools designed for quick feedback and easy implementation of changes." },
        { detailName: "Version Control", detailDescription: "Keep track of all edits and versions of the content, allowing for easy rollbacks and comparisons between different stages of the project." },
        { detailName: "Task Assignment", detailDescription: "Assign specific tasks and deadlines to editors, ensuring a structured and timely workflow for all content projects." },
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
      <div className='  my-[50px] grid'>
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