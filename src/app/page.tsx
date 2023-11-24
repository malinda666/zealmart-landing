import { Button } from '@/components/ui/Button'
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
      <section className="relative w-full mx-auto min-h-[calc(75vh-79px)] md:min-h-[calc(100vh-95px)]">
        <div className="flex container mx-auto flex-col items-center justify-center md:px-8">
          <div className="relative w-[120px] min-h-[24px] h-max mt-12">
            <Image src="/assets/svg/hero.svg" fill alt="HeroShape" />
          </div>
          <h1 className="mt-4 md:mt-16 text-3xl md:text-6xl font-bold text-center">
            Simplify, Secure and Scale Your Business Operations with Confidence
          </h1>
          <p className="mt-3 md:mt-6 text-sm md:text-lg text-center text-border">
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
          <div className="absolute bottom-0 mt-3 md:mt-6 flex flex-col items-center w-full bg-foreground overflow-hidden">
            <p className="text-sm md:text-lg font-semibold text-border pt-6">
              Trusted by Leading Businesses Worldwide
            </p>
            <div className="mt-2 w-[115%] flex items-center justify-between">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  className="relative min-h-[75px] min-w-[60px] md:min-h-[150px] md:min-w-[200px] w-full"
                  key={item}
                >
                  <Image
                    src={'/assets/logos/' + item + '.png'}
                    alt={item + 'logo'}
                    fill
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center',
                      transform: 'scale(1.5)',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto pt-16">
        <div className="p-10 rounded-[40px] bg-foreground grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto bg-radial-gradient">
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

        <div className="max-w-screen-lg mx-auto grid grid-cols-2 md:flex items-center justify-between mt-12">
          {featuresTiles.map((tile) => (
            <div
              className="relative flex flex-col items-center rounded-[40px] mb-4 md:mb-0 justify-center h-[40vw] md:h-[200px] drop-shadow-custom aspect-square bg-gradient-to-br from-background via-foreground to-foreground"
              key={tile.title1}
            >
              <div className="relative min-h-[60px] aspect-square mb-6">
                <Image src={tile.src} fill alt={tile.title1} />
              </div>
              <div className="px-6 text-center text-sm">
                <span>{tile.title1}</span>
                <span className="text-primary"> {tile.title2}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
