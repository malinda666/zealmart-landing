import ContactCard from '@/components/modules/ContactCard'
import FAQAccordion from '@/components/modules/FAQAccordion'
import TestimonialSlider from '@/components/modules/TestimonialSlider'
import { Button } from '@/components/ui/Button'
import Title from '@/components/ui/Title'
import { featuresCardData, intgratedModulesData } from '@/data/featuresData'
import { testimonialSliderData } from '@/data/testimonialSliderData'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Features() {
  return (
    <>
      <section className="relative mx-auto container max-w-screen-lg grid grid-cols-1 md:grid-cols-7 px-0">
        <div className="flex flex-col items-center md:items-start md:justify-start md:col-span-4 px-4 md:px-0">
          <h4 className="text-3xl font-semibold mb-8 mt-8 md:mt-36 text-center md:text-start">
            Unlocking Business Success: Explore the Power of Our Comprehensive
            Feature Set
          </h4>
          <p className="text-border text-sm mb-8 max-w-md text-center md:text-start">
            Dive into the rich tapestry of features that power our system, and
            witness firsthand how our comprehensive toolset can transform your
            business operations. From real-time inventory tracking to
            streamlined order management, our feature-packed solution empowers
            you to enhance efficiency, minimize costs, and achieve unprecedented
            success. Discover the tools that will revolutionize the way you
            manage your inventory and sales, placing the power of business
            optimization right at your fingertips
          </p>
          <div className="">
            <Button>Try Zealmart Free</Button>
          </div>
        </div>
        <div className="relative flex md:col-span-3 aspect-[4/6]">
          <Image
            src="/assets/svg/features-banner.svg"
            fill
            alt="features-banner"
          />
        </div>
      </section>
      <section className="">
        <Title title={['Zealmart', 'Features']} size="big" align="center" />
        <div className="my-8 md:my-16 grid grid-cols-1 md:grid-cols-3 gap-2">
          {featuresCardData.map((card, i) => (
            <div
              className="w-full aspect-square bg-foreground flex flex-col items-center justify-between p-6 rounded-3xl"
              key={i}
            >
              <div className="text-xl font-semibold">{card.title}</div>
              <p className="text-sm text-border px-4 text-center">
                {card.content}
              </p>
              <Button size="sm" variant="dark2">
                Try It Out
              </Button>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center w-full my-8">
          <button className="inline-flex items-center justify-center bg-foreground pl-6 pr-20 py-4 rounded-full shadow-md shadow-black relative hover:shadow-none transition-all duration-200 ease-in-out">
            Get Started
            <span className="absolute right-0 p-3 shadow-sm shadow-black rounded-full bg-foreground">
              <ChevronRight size={36} />
            </span>
          </button>
        </div>
      </section>
      <section>
        <Title
          title={['Integrated Modules for', 'Streamlined Operations']}
          size="big"
          align="center"
        />
        <div className="my-8 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-2">
          {intgratedModulesData.map((card, i) => (
            <div
              className="w-full bg-foreground flex flex-col items-center justify-between p-12 rounded-3xl"
              key={i}
            >
              <div className="mb-6 font-semibold text-xl">{card.title}</div>
              <div className="relative h-[200px] aspect-square mb-4">
                <Image src={card.img} alt={card.title} fill />
              </div>
              <p className="text-border text-sm max-w-md text-center mb-4">
                {card.content}
              </p>
              <Button size="sm">Try Zealmart Free</Button>
            </div>
          ))}
        </div>
      </section>
      <section className="pt-16 !min-h-max">
        <div className="p-10 rounded-[40px] bg-foreground grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto bg-radial-gradient">
          <div className="flex flex-col items-start justify-center gap-6 col-span-1 ">
            <Title title={['Stay in Control', 'Anywhere, Anytime']} />
            <p className="text-border text-sm max-w-sm text-center md:text-start mb-6 md:mb-0">
              {`Our system keeps you in control, regardless of your location or
              the device you're using. With a responsive design that caters to
              desktops, tablets, and smartphones, you can access your inventory
              and sales data from virtually anywhere. This means you're always
              in the driver's seat, whether you're in the office, out in the
              field, or on the road. Enjoy the convenience of real-time access,
              making it easy to stay informed and make crucial decisions while
              on the move.`}
            </p>
          </div>
          <div className="col-span-1 relative w-full h-full ">
            <div className="aspect-[6/4]">
              <Image
                src="/assets/images/features-banner-2.png"
                fill
                alt="features"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-max">
        <TestimonialSlider
          title={['Voices of', 'Satisfaction']}
          items={testimonialSliderData}
        />
      </section>
      <section className="!min-h-max">
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
      <ContactCard />
    </>
  )
}
