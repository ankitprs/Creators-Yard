import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Headline } from './Headline'




function FAQs() {
  const questions = [
    { id: 1, question: "How do I contact support?", answer: "For any queries or assistance, please email us at ankitpr2001@gmail.com We strive to respond within 24 hours" },
    { id: 2, question: "What languages does Podnotes support?", answer: "Podnotes supports 19 languages including " },
    { id: 3, question: "Can I generate Unlimited Content?", answer: "Yes, you can generate unlimited content on any of the paid plans." },
    { id: 4, question: "Is there a Free Plan?", answer: "Yes, all users get to try out Podnotes with 50 mins of transcription time for free" },
    { id: 5, question: "Can I get a refund?", answer: "Podnotes offers 50 mins of transcription for free for users to try out the app. We do not offer refunds." },
    { id: 6, question: "Does Podnotes Transcribe Youtube Videos directly?", answer: "Yes, you can just paste the URL of any publicly available Youtube video to transcribe it, summarize it and create content from it." },
    { id: 7, question: "What kind and size of files are supported by Podnotes?", answer: "Podnotes supports multiple formats of files (.mp4, mp3, .wav, .ogg) upto 500 Mb/file as long as you have transcription time" },
    { id: 8, question: "What are the audio length limitations on the app?", answer: "While there is no limit to how long can individual files can be, You can transcribe videos based on your available transcription time. However, you can upload files upto 500 Mb in size." },
    { id: 9, question: "Does Podnotes Support RSS Feeds?", answer: "Yes, you can fetch your podcasts directly via RSS Feeds." }
  ]

  const FAQuestion = ({ id, question, answer }: { id: number, question: string, answer: string }) => {
    return (
      <AccordionItem value={`item-${id}`} className='mx-[20px] my-[] text-[16px]'>
        <AccordionTrigger className=' font-medium'>{question}</AccordionTrigger>
        <AccordionContent className='text-[16px] font-light'>
          {answer}
        </AccordionContent>
      </AccordionItem>
    )
  }

  return (
    <div className='max-w-[1120px] my-[80px] w-full flex flex-col items-center' id='faq'>
      <Headline
        className='flex flex-col items-center'
        headline="FAQ's"
        subHeading="Don't worry, we got you. Here are some answers for your questions."
      />
      <Accordion type="single" collapsible className="w-[800px] my-[40px]  bg-[#F4F4EE] px-[10px] pt-[10px] rounded-[20px]">
        {
          questions.map((question) => <div key={question.id}>
            <FAQuestion id={question.id} question={question.question} answer={question.answer} />
          </div>)
        }
      </Accordion>
    </div>
  )
}

export { FAQs }