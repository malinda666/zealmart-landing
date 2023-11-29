import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion'
import Title from '@/components/ui/Title'
import { faqAccordionData } from '@/data/faqAccordionData'
import Image from 'next/image'
import React from 'react'

type FAQAccordionProps = {
  title: [string, string]
}

const FAQAccordion = ({ title }: FAQAccordionProps) => {
  return (
    <div className="w-full overflow-hidden relative flex flex-col items-start justify-start mt-16">
      <Title title={title} />
      <div className="mt-8 grid grid-cols-6 w-full">
        <Accordion type="single" collapsible className="w-full col-span-4">
          {faqAccordionData.map((item, i) => (
            <AccordionItem
              value={`item-${i}`}
              key={i}
              className="py-4 px-6 bg-foreground mb-2 rounded-3xl"
            >
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent className="text-border">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="relative w-full aspect-square max-w-full col-span-2">
          <Image
            src="/assets/svg/faq-accordion.right.svg"
            fill
            alt="features"
          />
        </div>
      </div>
    </div>
  )
}

export default FAQAccordion
