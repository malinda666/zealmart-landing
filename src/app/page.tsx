import Footer from '@/components/layout/Footer'
import ContactCard from '@/components/modules/ContactCard'
import FAQAccordion from '@/components/modules/FAQAccordion'
import LogoMarquee from '@/components/modules/LogoMarquee'
import TestimonialSlider from '@/components/modules/TestimonialSlider'
import { Button } from '@/components/ui/Button'
import { testimonialSliderData } from '@/data/testimonialSliderData'
import Image from 'next/image'

const featuresTiles = [
  {
    title1: 'Gain control over your business',
    title2: 'on-the-go',
    src: '/assets/svg/features-1.svg',
  },
  {
    title1: 'Effortless Cash Flow',
    title2: 'Monitoring',
    src: '/assets/svg/features-2.svg',
  },
  {
    title1: 'Real-time',
    title2: 'Tracking',
    src: '/assets/svg/features-3.svg',
  },
  {
    title1: 'Real-time',
    title2: 'Tracking',
    src: '/assets/svg/features-4.svg',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full mx-auto min-h-max flex flex-col justify-between">
        <div className="flex max-w-screen-lg mx-auto flex-col items-center justify-center md:px-8">
          <div className="relative w-[120px] min-h-[24px] h-max mt-12">
            <Image src="/assets/svg/hero.svg" fill alt="HeroShape" />
          </div>
          <h1 className="mt-4 md:mt-12 text-3xl md:text-5xl font-bold text-center">
            Simplify, Secure and Scale Your Business Operations with Confidence
          </h1>
          <p className="mt-3 md:mt-6 text-sm text-center text-border px-4 md:px-0">
            Discover a modern, comprehensive approach to business management.
            Our system provides a suite of powerful tools designed to simplify
            your operations, enhance security, and pave the way for scalable
            growth. Experience efficiency, precision, and a new era in business
            success
          </p>
          <div className="mt-3 md:mt-6 flex items-center justify-center gap-2 md:gap-8">
            <Button>Try Zealmart Free</Button>
            <Button>Learn More</Button>
          </div>
        </div>
        <div className="relative mt-8 md:mt-16 xl:mt-24 2xl:mt-28 flex flex-col items-center w-full bg-foreground overflow-hidden">
          <p className="text-sm md:text-lg font-semibold text-border pt-6">
            Trusted by Leading Businesses Worldwide
          </p>
          <LogoMarquee />
        </div>
      </div>

      {/* Features Section */}
      <section className="pt-16">
        <div className="p-5 md:p-10 rounded-[40px] bg-foreground grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto bg-radial-gradient">
          <div className="flex flex-col items-start justify-center gap-6 col-span-1 ">
            <h2 className="text-3xl font-semibold text-center md:text-start">
              Enhance Shop Management <br />
              <span className="text-primary">Smoother</span>
            </h2>
            <p className="text-border text-sm max-w-sm text-center md:text-start mb-6 md:mb-0">
              Unlock the future of business management with our solutions,
              offering efficiency, security, scalability, simplicity,
              profitability, customer satisfaction, and a competitive edge.
              Streamline your operations, protect your data, and grow your
              business confidently with our user-friendly tools, making
              management hassle-free. Experience top-notch service and stay
              ahead of the competition with cutting-edge technology and best
              practices.
            </p>
          </div>
          <div className="col-span-1 relative w-full h-full ">
            <div className="aspect-[6/4]">
              <Image src="/assets/images/features.png" fill alt="features" />
            </div>
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto grid grid-cols-2 place-items-center lg:flex gap-4 mb-8 items-center justify-between mt-12">
          {featuresTiles.map((tile) => (
            <div
              className="relative flex flex-col items-center rounded-[40px] justify-center h-[40vw] md:h-[200px] drop-shadow-custom aspect-square bg-gradient-to-br from-background via-foreground to-foreground"
              key={tile.src}
            >
              <div className="relative min-h-[40px] md:min-h-[60px] aspect-square mb-4 md:mb-6">
                <Image src={tile.src} fill alt={tile.title1} />
              </div>
              <div className="px-4 md:px-6 text-center text-xs md:text-sm">
                <span>{tile.title1}</span>
                <span className="text-primary"> {tile.title2}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="relative p-5 md:p-10 rounded-[40px] bg-foreground grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto bg-radial-gradient">
          <div className="flex flex-col items-start justify-center gap-6 col-span-1 ">
            <h2 className="text-3xl font-semibold text-center md:text-start">
              Manage Employees <br />
              <span className="text-primary">Easily</span>
            </h2>
            <p className="text-border text-sm max-w-sm text-center md:text-start mb-6 md:mb-0">
              With Zeal Mart, you have the power to efficiently manage your
              workforce. You can effortlessly control and customize permissions
              for your employees, allowing you to assign access levels based on
              their roles and responsibilities. This means you can ensure that
              your team members have the right level of access to perform their
              tasks effectively while maintaining the security and
              confidentiality of sensitive business data. Managing your
              employees and their permissions has never been easier, giving you
              the control you need to optimize your operations.
            </p>
          </div>
          <div className="col-span-1 relative w-full h-full ">
            <div className="aspect-[6/4]">
              <Image
                src="/assets/svg/manage-employees.svg"
                fill
                alt="features"
              />
            </div>
          </div>
          <div className="absolute left-[-25px] md:left-[-45px] bottom-8 w-full aspect-[6/4] max-w-[50px] md:max-w-[90px]">
            <Image src="/assets/svg/triangle-deco.svg" fill alt="features" />
          </div>
          <div className="absolute z-[-1] left-[-25px] md:left-[-45px] bottom-8 w-full aspect-[6/4] max-w-[50px] md:max-w-[90px]">
            <Image src="/assets/svg/triangle-deco-2.svg" fill alt="features" />
          </div>
          <div className="absolute right-[-25px] md:right-[-45px] top-8 w-full aspect-[6/4] max-w-[50px] md:max-w-[90px]">
            <Image src="/assets/svg/triangle-deco.svg" fill alt="features" />
          </div>
          <div className="absolute z-[-1] right-[-25px] md:right-[-45px] top-8 w-full aspect-[6/4] max-w-[50px] md:max-w-[90px]">
            <Image src="/assets/svg/triangle-deco-2.svg" fill alt="features" />
          </div>
        </div>
        <div className="relative p-5 md:p-10 rounded-[40px] bg-foreground grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto bg-radial-gradient mt-16">
          <div className="col-span-1 relative w-full h-full ">
            <div className="aspect-[6/4]">
              <Image src="/assets/svg/stay-connected.svg" fill alt="features" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-6 pl-6 col-span-1 ">
            <h2 className="text-3xl font-semibold text-center md:text-start">
              Stay connected to our <br />
              <span className="text-primary">Stock</span>
            </h2>
            <p className="text-border text-sm max-w-sm text-center md:text-start mb-6 md:mb-0">
              {`Our system empowers you to stay closely connected to your
              inventory like never before. With real-time tracking, detailed
              insights, and comprehensive reporting, you'll always have your
              finger on the pulse of your stock levels. Whether you're at the
              office, on the go, or managing multiple locations, our solution
              keeps you in touch with your inventory, ensuring you're
              well-prepared to make informed decisions and stay ahead of your
              inventory management needs. Don't let stockouts or overstocking
              surprise you – stay connected and in control with our system.`}
            </p>
          </div>
          <div className="absolute right-[-40px] md:right-[-60px] bottom-8 w-full aspect-[6/4] max-w-[80px] md:max-w-[120px]">
            <Image src="/assets/svg/circle-deco.svg" fill alt="features" />
          </div>
          <div className="absolute z-[-1] right-[-40px] md:right-[-60px] bottom-8 w-full aspect-[6/4] max-w-[80px] md:max-w-[120px]">
            <Image src="/assets/svg/circle-deco-2.svg" fill alt="features" />
          </div>
          <div className="absolute left-[-40px] md:left-[-60px] top-8 w-full aspect-[6/4] max-w-[80px] md:max-w-[120px]">
            <Image src="/assets/svg/circle-deco.svg" fill alt="features" />
          </div>
          <div className="absolute z-[-1] left-[-40px] md:left-[-60px] top-8 w-full aspect-[6/4] max-w-[80px] md:max-w-[120px]">
            <Image src="/assets/svg/circle-deco-2.svg" fill alt="features" />
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
