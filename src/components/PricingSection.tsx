import { useEffect, useState } from 'react'
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  CheckCircle2,
  FileText,
  Rocket,
  SlidersHorizontal,
  Target,
} from 'lucide-react'
import pricingImage from '../assets/hero/pricingimage.jpeg'
import ConsultationFormModal from './ConsultationFormModal'

const pricingTiers = [
  {
    icon: Rocket,
    name: 'Essentials',
    accent: '#f97316',
    bestFor: 'Early-stage startups needing structure, monthly reporting, and runway visibility',
    price: 'SGD 3,000 / mo',
  },
  {
    icon: BarChart3,
    name: 'Growth',
    accent: '#3970E2',
    bestFor: 'Series A-B companies preparing to fundraise or scale cross-border',
    price: 'SGD 5,000 - 8,000 / mo',
    featured: true,
  },
  {
    icon: Target,
    name: 'Strategic',
    accent: '#059669',
    bestFor: 'Growth-stage SMEs needing full finance leadership and M&A readiness',
    price: 'SGD 10,000+ / mo',
  },
]

const engagementNotes = [
  { icon: SlidersHorizontal, label: 'All engagements customised to your business' },
  { icon: FileText, label: 'No long-term contracts' },
  { icon: BadgeDollarSign, label: 'No setup fees' },
]

function useDesktopImage() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    const update = () => setEnabled(mediaQuery.matches)

    update()
    mediaQuery.addEventListener('change', update)

    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  return enabled
}

export default function PricingSection() {
  const showDesktopImage = useDesktopImage()
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

  return (
    <>
      <section
        id="pricing"
        className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#3970E2]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#EE8CB6]/16 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#843CDA]">
                Pricing
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-[#17120d] sm:text-4xl lg:text-5xl">
                Transparent, Founder-Friendly Pricing
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#554b61]">
                A full-time CFO in Singapore costs SGD 300,000-400,000 per year,
                plus equity, bonus, and benefits. For most growing businesses, that's
                neither affordable nor necessary.
              </p>
              <p className="mt-4 text-lg leading-8 text-[#554b61]">
                Our engagements are scoped around your stage. Every plan includes
                direct access to senior CFO talent.
              </p>
            </div>

            {showDesktopImage && (
              <div className="relative hidden lg:block">
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-[2.5rem] bg-[linear-gradient(100deg,#3970E2,#843CDA,#EE8CB6)] opacity-20 blur-xl"
                />
                <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_26px_90px_rgba(28,24,90,0.16)]">
                  <img
                    src={pricingImage}
                    alt="Growwth Partners pricing overview"
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pricingTiers.map((tier) => {
              const Icon = tier.icon

              return (
                <article
                  key={tier.name}
                  className={`relative rounded-[2rem] border bg-white p-6 shadow-[0_20px_70px_rgba(28,24,90,0.08)] ${
                    tier.featured
                      ? 'border-[#5155E1]/30 ring-4 ring-[#5155E1]/10'
                      : 'border-[#ece8e3]'
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute right-5 top-5 rounded-full bg-[#f7f5ff] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#5155E1]">
                      Popular
                    </div>
                  )}

                  <div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-[0_14px_36px_rgba(28,24,90,0.16)]"
                    style={{ backgroundColor: tier.accent }}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="text-2xl font-black text-[#17120d]">{tier.name}</h3>

                  <div className="mt-6 border-t border-[#ece8e3] pt-6">
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-[#843CDA]">
                      Best for
                    </p>
                    <p className="mt-2 min-h-24 text-base font-semibold leading-7 text-[#4f485c]">
                      {tier.bestFor}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#ece8e3] pt-6">
                    <p className="text-sm font-bold text-[#6b6476]">Starting from</p>
                    <p className="mt-2 text-2xl font-black tracking-[-0.02em] text-[#17120d]">
                      {tier.price}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-8 grid gap-4 rounded-[2rem] border border-[#ece8e3] bg-[#fbfaff] p-4 shadow-[0_18px_60px_rgba(28,24,90,0.08)] lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="grid gap-3 md:grid-cols-3">
              {engagementNotes.map((note) => {
                const Icon = note.icon

                return (
                  <div
                    key={note.label}
                    className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-black text-[#27214f]"
                  >
                    <Icon className="h-5 w-5 text-[#843CDA]" aria-hidden="true" />
                    {note.label}
                  </div>
                )
              })}
            </div>

            <button
              type="button"
              onClick={() => setIsConsultationModalOpen(true)}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(100deg,#3970E2_0%,#5155E1_34%,#843CDA_68%,#EE8CB6_100%)] px-7 py-4 text-base font-black text-white shadow-[0_18px_44px_rgba(81,85,225,0.26)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5155E1]"
            >
              Get a Custom Proposal
              <ArrowRight
                className="h-5 w-5 transition group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </button>
          </div>

          <p className="mt-5 flex items-center justify-center gap-2 text-center text-sm font-bold text-[#6b6476]">
            <CheckCircle2 className="h-4 w-4 text-[#059669]" aria-hidden="true" />
            All engagements customised to your business. No long-term contracts. No
            setup fees.
          </p>
        </div>
      </section>

      <ConsultationFormModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </>
  )
}
