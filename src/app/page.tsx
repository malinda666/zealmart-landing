import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative container mx-auto min-h-[calc(100vh-79px)] md:min-h-[calc(100vh-95px)]">
        <div className="flex flex-col items-center justify-center md:px-8">
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
      <section>features</section>
    </>
  )
}
