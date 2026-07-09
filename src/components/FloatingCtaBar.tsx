import { ArrowRight, CalendarDays, WalletCards } from 'lucide-react'
import { useEffect, useState } from 'react'

const CALENDLY_URL = 'https://calendly.com/jd-growwthpartners/15min?month=2025-11'

export default function FloatingCtaBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 96)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const footer = document.getElementById('site-footer')

    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting)
      },
      {
        threshold: 0.05,
      },
    )

    observer.observe(footer)

    return () => observer.disconnect()
  }, [])

  if (!isVisible || isFooterVisible) {
    return null
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 px-4 sm:bottom-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <div className="pointer-events-auto rounded-[1.75rem] border border-white/65 bg-white/92 p-3 shadow-[0_24px_70px_rgba(28,24,90,0.2)] ring-1 ring-[#e8e4f7] backdrop-blur-xl">
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#e3dcf2] bg-[#f7f5ff] px-5 py-3 text-sm font-black text-[#5155E1] transition hover:bg-[#efeaff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5155E1]"
            >
              <WalletCards className="h-4 w-4" aria-hidden="true" />
              Pricing
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[linear-gradient(100deg,#3970E2_0%,#5155E1_35%,#843CDA_70%,#EE8CB6_100%)] px-5 py-3 text-sm font-black text-white shadow-[0_18px_44px_rgba(81,85,225,0.26)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5155E1]"
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Book Free Consultation
              <ArrowRight
                className="h-4 w-4 transition group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
