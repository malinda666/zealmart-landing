import ContactCard from '@/components/modules/ContactCard'
import { Button } from '@/components/ui/Button'
import { Separator } from '@/components/ui/Separator'
import { pricingData } from '@/data/pricingData'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import Image from 'next/image'

export default function Pricing() {
  return (
    <>
      <section className="relative !min-h-max mx-auto container max-w-screen-lg grid grid-cols-1 md:grid-cols-7 px-4 lg:px-0">
        <div className="flex flex-col items-center md:items-start md:justify-center md:col-span-3 px-4 md:px-0">
          <h4 className="text-6xl font-semibold mb-8 text-center md:text-start">
            Pricing
          </h4>
          <p className="text-border text-sm mb-8 max-w-md text-center md:text-start">
            Explore our flexible pricing plans, designed to accommodate
            businesses of all sizes. Choose the plan that aligns with your
            specific needs and budget, ensuring you get the most value from our
            inventory management system without overcommitting.
          </p>
        </div>
        <div className="relative flex md:col-span-4 aspect-square">
          <Image
            src="/assets/svg/pricing-banner.svg"
            fill
            alt="pricing-banner"
          />
        </div>
      </section>
      <section className="!min-h-max mb-8 lg:mb-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-3">
          {pricingData.map((pricing, i) => {
            const isRecommended = pricing.isRecommended

            return (
              <div
                className={cn(
                  'relative rounded-3xl flex flex-col items-center pb-0 md:pb-8',
                  isRecommended && 'text-black'
                )}
                style={{
                  backgroundColor: pricing.color,
                }}
                key={i}
              >
                <div className="relative top-0 left-0 rounded-3xl p-8 bg-black/40 backdrop-blur-lg text-white text-center w-full text-2xl font-semibold">
                  {pricing.name} Plan
                </div>
                {isRecommended && (
                  <button className="absolute bg-black/10 backdrop-blur-md font-semibold text-lg -top-8 inline-flex items-center justify-center px-6 py-4 rounded-full text-white transition-all duration-200 ease-in-out">
                    Best Value
                  </button>
                )}
                <p className="mt-2 p-5 text-xs text-center h-[70px]">
                  {pricing.description}
                </p>
                <span className="mt-6 text-3xl font-bold">
                  ${pricing.price.toString()}/mo
                </span>
                <div className="w-full h-[1px] bg-gradient-to-r from-primary via-transparent to-primary mt-4" />
                <ul className="mt-6 p-6">
                  {pricing.features.map((feature, j) => (
                    <li
                      key={j}
                      className="inline-flex items-center justify-start mb-4"
                    >
                      <span className="h-[25px] aspect-square relative mr-2">
                        <Image
                          src={
                            isRecommended
                              ? '/assets/svg/check-neutral.svg'
                              : '/assets/svg/check-green.svg'
                          }
                          fill
                          alt="check-icon"
                        />
                      </span>
                      <span className="text-sm">{feature.feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-center my-4">
                  <Button variant={pricing.buttonVariant as any}>
                    Try Free For 30 Days
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <ContactCard />
    </>
  )
}
