import { Button } from '@/components/ui/Button'
import React from 'react'

const ContactCard = () => {
  return (
    <section className="!min-h-max">
      <div className="bg-foreground rounded-3xl py-6 px-5 md:px-10 my-8">
        <h1 className="mt-4 md:mt-16 text-3xl md:text-5xl font-bold text-center">
          Need a Custom Plan That Suits Your Business?
        </h1>
        <p className="mt-3 md:mt-6 text-sm text-center text-border max-w-xl mx-auto">
          Join the ranks of successful businesses that have chosen zimplybook as
          their trusted partner. Contact us now to schedule a personalized demo
          or get a quote tailored to your needs
        </p>
        <div className="mt-3 md:mt-6 flex items-center justify-center gap-2 md:gap-8">
          <Button>Contact Us</Button>
        </div>
      </div>
    </section>
  )
}

export default ContactCard
