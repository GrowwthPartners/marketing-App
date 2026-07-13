import { lazy, Suspense, useEffect, useState } from 'react'
import { ArrowRight, Award, BadgeCheck, Star, Users } from 'lucide-react'
import jatinBanner from '../assets/hero/jatin-banner.webp'
import ConsultationFormModal from './ConsultationFormModal'

const DesktopAwardShowcase = lazy(() => import('./DesktopAwardShowcase'))

const trustItems = [
  { icon: Star, label: '5.0 rated' },
  { icon: Users, label: '200+ Singapore businesses' },
  { icon: Award, label: "Asia's Greatest CFO Award" },
  { icon: BadgeCheck, label: 'Xero Silver Partner' },
]

function useDesktopEnhancements() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const update = () => setEnabled(mediaQuery.matches)

    update()
    mediaQuery.addEventListener('change', update)

    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  return enabled
}

function DesktopAwardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto min-h-[590px] w-full max-w-[38rem] rounded-[2.5rem] bg-[linear-gradient(135deg,#3970E2_0%,#5155E1_38%,#843CDA_70%,#EE8CB6_100%)] opacity-80 shadow-[0_30px_90px_rgba(57,112,226,0.24)] xl:min-h-[660px]"
    />
  )
}

export default function HeroSection() {
  const enableDesktopEnhancements = useDesktopEnhancements()
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

  const openConsultationModal = () => setIsConsultationModalOpen(true)
  const closeConsultationModal = () => setIsConsultationModalOpen(false)

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(238,140,182,0.22),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(57,112,226,0.18),transparent_32%),linear-gradient(180deg,#ffffff_0%,#f7f5ff_48%,#ffffff_100%)]"
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 xl:max-w-[90rem]">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-black leading-[1.02] tracking-[-0.04em] text-[#17120d] sm:text-5xl lg:text-6xl xl:text-7xl">
              Fractional CFO Services for Singapore Businesses
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#554b61] sm:text-xl">
              Virtual and fractional CFO services for Singapore businesses. Personally
              guided by Jatin Detwani, one of Asia's Top CFOs. Get senior finance
              leadership that your business deserves not just an agency handoff.
            </p>
          </div>

          <div className="relative mx-auto mt-10 max-w-6xl">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2.25rem] bg-[linear-gradient(100deg,#3970E2_0%,#5155E1_34%,#843CDA_68%,#EE8CB6_100%)] opacity-20 blur-xl md:-inset-5"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-[0_28px_90px_rgba(28,24,90,0.16)] md:rounded-[2.5rem]">
              <img
                src={jatinBanner}
                alt="Jatin Daswani, award-winning CFO"
                className="aspect-[16/9] w-full object-cover object-center"
                fetchPriority="high"
              />
              <div className="absolute bottom-4 left-4 hidden rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-left shadow-[0_18px_45px_rgba(28,24,90,0.14)] backdrop-blur md:block">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#843CDA]">
                  Personally guided
                </p>
                <p className="mt-1 text-sm font-black text-[#17120d]">
                  Jatin Detwani · Award-winning CFO
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-16">
            <div className="rounded-[2rem] border border-[#ece8e3] bg-white/88 p-5 shadow-[0_22px_70px_rgba(28,24,90,0.1)] backdrop-blur sm:p-6 lg:p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#843CDA]">
                Trusted CFO partner
              </p>

              <div className="mt-5 grid gap-3">
                {trustItems.map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-2xl border border-[#eeeaf6] bg-[#fbfaf8] px-4 py-3 text-sm font-bold text-[#27214f]"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f7f5ff] text-[#843CDA]">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span>{item.label}</span>
                    </div>
                  )
                })}
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={openConsultationModal}
                  className="group inline-flex items-center justify-center gap-2 rounded-full cursor-pointer bg-[linear-gradient(100deg,#3970E2_0%,#5155E1_35%,#843CDA_70%,#EE8CB6_100%)] px-7 py-4 text-base font-black text-white shadow-[0_18px_44px_rgba(81,85,225,0.28)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5155E1]"
                >
                  Book a Free 30-Min Consultation
                  <ArrowRight
                    className="h-5 w-5 transition group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
                  className="group rounded-2xl border border-[#ece8e3] bg-white px-5 py-3 cursor-pointer text-left text-sm font-bold text-[#27214f] shadow-sm transition hover:border-[#843CDA]/40 hover:bg-[#f7f5ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5155E1]"
                >
                  <span className="block text-[#17120d]">
                    Sounds too good to be true?
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#5155E1]">
                    Check for yourself, pick a time directly on Jatin's calendar
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </button>
              </div>
            </div>

            <div className="hidden md:block">
              {enableDesktopEnhancements ? (
                <Suspense fallback={<DesktopAwardSkeleton />}>
                  <DesktopAwardShowcase />
                </Suspense>
              ) : (
                <DesktopAwardSkeleton />
              )}
            </div>
          </div>
        </div>
      </section>

      <ConsultationFormModal
        isOpen={isConsultationModalOpen}
        onClose={closeConsultationModal}
      />
    </>
  )
}
