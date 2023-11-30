import ContactForm from '@/components/modules/ContactForm'
import FAQAccordion from '@/components/modules/FAQAccordion'
import { Button } from '@/components/ui/Button'
import Title from '@/components/ui/Title'
import Image from 'next/image'

export default function ContactUs() {
  return (
    <>
      <section className="relative mx-auto container max-w-screen-lg grid grid-cols-1 md:grid-cols-2 px-0 !min-h-max mb-8">
        <div className="mt-8">
          <Title title={[`Let's Discuss Your`, 'Requirements']} size="big" />
          <div className="relative w-[90%] aspect-square">
            <Image
              src="/assets/svg/contact-banner.svg"
              alt="Contact Banner"
              fill
            />
          </div>
          <p className="text-sm text-border max-w-md">
            {`We're here to assist you every step of the way. Whether you have questions, need support, or are interested in learning more about our system, feel free to reach out.`}
          </p>
        </div>
        <div className="bg-foreground p-6 mt-8 rounded-3xl h-max">
          <ContactForm />
        </div>
      </section>
      <div className="w-full bg-foreground mb-8">
        <section className="!min-h-max py-6 !px-0">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 mb-6 md:mb-0">
              <h4 className="text-lg md:text-3xl font-semibold">Find Us On</h4>
              <div className="flex items-center gap-2 md:gap-4">
                <div className="relative w-[25px] md:w-[40px] aspect-square">
                  <Image
                    src="/assets/logos/logos_facebook.png"
                    alt="facebook"
                    fill
                  />
                </div>
                <div className="relative w-[25px] md:w-[40px] aspect-square">
                  <Image
                    src="/assets/logos/logos_linkedin.png"
                    alt="facebook"
                    fill
                  />
                </div>
                <div className="relative w-[25px] md:w-[40px] aspect-square">
                  <Image
                    src="/assets/logos/logos_instagram.png"
                    alt="facebook"
                    fill
                  />
                </div>
                <div className="relative w-[25px] md:w-[40px] aspect-square">
                  <Image
                    src="/assets/logos/logos_twitter.png"
                    alt="facebook"
                    fill
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <h4 className="text-lg md:text-3xl font-semibold">Email</h4>
              <a
                href="mailto:help@zealmart.com"
                className="text-sm md:text-xl text-[#00E676]"
              >
                help@zealmart.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <h4 className="text-lg md:text-3xl font-semibold">Call Us</h4>
              <a
                href="tel:+9402221442343"
                className="text-sm md:text-xl text-[#00E676]"
              >
                02221442343
              </a>
            </div>
          </div>
        </section>
      </div>
      <section className="!min-h-max mb-8">
        <FAQAccordion title={['Have Questions?', 'We have answers']} />
        <div className="text-sm mt-6 flex flex-col items-center md:items-start">
          <span className="">{`Couldn't Find What you Looking For?`}</span>
          <span>
            Write to us{' '}
            <a className="text-[#464EFF]" href="mailto:help@zealmart.com">
              help@zealmart.com
            </a>
          </span>
        </div>
      </section>
    </>
  )
}
