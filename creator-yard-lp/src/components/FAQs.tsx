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
    { id: 3, question: "Can I connect Unlimited channels?", answer: "Yes, you can connect unlimited channel on any of the paid plans." },
    { id: 4, question: "Can I add Unlimited users?", answer: "Yes, you can add unlimited users on any of the paid plans." },
    { id: 5, question: "Is there a Free Plan?", answer: "Yes, but only for trial purpose with restricted access" },
    { id: 6, question: "Can I get a refund?", answer: "Yes, we will refund your money according to our refund policy" },
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