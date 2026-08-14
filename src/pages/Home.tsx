import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from 'react'
import { Head } from 'vite-react-ssg'
import Footer from '../components/Footer'
import FloatingCtaBar from '../components/FloatingCtaBar'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ProblemSection from '../components/ProblemSection'
import WhyUsSection from '../components/WhyUsSection'

const SocialProofSection = lazy(() => import('../components/SocialProofSection'))
const MeetJatinSection = lazy(() => import('../components/MeetJatinSection'))
const ServicesSection = lazy(() => import('../components/ServicesSection'))
const CustomisationSection = lazy(() => import('../components/CustomisationSection'))
const PricingSection = lazy(() => import('../components/PricingSection'))
const ProcessSection = lazy(() => import('../components/ProcessSection'))
const IndustriesSection = lazy(() => import('../components/IndustriesSection'))
const FaqSection = lazy(() => import('../components/FaqSection'))

type DeferredSectionProps = {
  anchorId?: string
  children: ReactNode
  minHeightClassName: string
}

function SectionFallback({ minHeightClassName }: Pick<DeferredSectionProps, 'minHeightClassName'>) {
  return (
    <div
      aria-hidden="true"
      className={`${minHeightClassName} bg-[linear-gradient(180deg,#ffffff_0%,#fbfaff_100%)]`}
    />
  )
}

function DeferredSection({ anchorId, children, minHeightClassName }: DeferredSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (shouldRender) return

    const element = ref.current
    if (!element || !('IntersectionObserver' in window)) {
      setShouldRender(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return

        setShouldRender(true)
        observer.disconnect()
      },
      { rootMargin: '900px 0px' },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [shouldRender])

  return (
    <div id={anchorId} ref={ref}>
      {shouldRender ? (
        <Suspense fallback={<SectionFallback minHeightClassName={minHeightClassName} />}>
          {children}
        </Suspense>
      ) : (
        <SectionFallback minHeightClassName={minHeightClassName} />
      )}
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Fractional CFO Services for Singapore Businesses</title>
        <meta
          name="description"
          content="Virtual and fractional CFO services for Singapore businesses, personally guided by Jatin Detwani."
        />
      </Head>
      <div className="flex min-h-screen flex-col bg-[#ffffff] text-[#17120d]">
        <Navbar />
        <FloatingCtaBar />
        <main className="flex-1">
          <HeroSection />
          <ProblemSection />
          <WhyUsSection />
          <DeferredSection
            anchorId="stories"
            minHeightClassName="min-h-[58rem] md:min-h-[72rem]"
          >
            <SocialProofSection />
          </DeferredSection>
          <DeferredSection minHeightClassName="min-h-[42rem] md:min-h-[36rem]">
            <MeetJatinSection />
          </DeferredSection>
          <DeferredSection
            anchorId="services"
            minHeightClassName="min-h-[60rem] md:min-h-[42rem]"
          >
            <ServicesSection />
          </DeferredSection>
          <DeferredSection minHeightClassName="min-h-[40rem]">
            <CustomisationSection />
          </DeferredSection>
          <DeferredSection
            anchorId="pricing"
            minHeightClassName="min-h-[48rem] md:min-h-[36rem]"
          >
            <PricingSection />
          </DeferredSection>
          <DeferredSection minHeightClassName="min-h-[54rem] md:min-h-[40rem]">
            <ProcessSection />
          </DeferredSection>
          <DeferredSection minHeightClassName="min-h-[70rem] md:min-h-[52rem]">
            <IndustriesSection />
          </DeferredSection>
          <DeferredSection anchorId="faq" minHeightClassName="min-h-[42rem]">
            <FaqSection />
          </DeferredSection>
        </main>
        <Footer />
      </div>
    </>
  )
}
