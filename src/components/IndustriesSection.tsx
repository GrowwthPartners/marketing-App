import { motion, useReducedMotion } from 'framer-motion'
import {
  Activity,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Coins,
  Gamepad2,
  Globe2,
  HeartPulse,
  ShoppingBag,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const industries = [
  {
    label: 'Fintech',
    icon: Coins,
    detail: 'Regulated growth, reporting discipline, and investor readiness.',
  },
  {
    label: 'SaaS & Technology',
    icon: BriefcaseBusiness,
    detail: 'MRR visibility, burn management, and scalable finance ops.',
  },
  {
    label: 'E-commerce & D2C',
    icon: ShoppingBag,
    detail: 'Inventory, margins, channel performance, and cash flow control.',
  },
  {
    label: 'MedTech & HealthTech',
    icon: HeartPulse,
    detail: 'Structured forecasting and reporting for longer growth cycles.',
  },
  {
    label: 'Gaming & Digital Businesses',
    icon: Gamepad2,
    detail: 'Fast-moving metrics, monetisation insight, and cross-border setups.',
  },
  {
    label: 'Venture-Backed Startups',
    icon: Activity,
    detail: 'Board reporting, fundraising prep, and operational finance clarity.',
  },
  {
    label: 'Cross-Border SMEs',
    icon: Globe2,
    detail: 'Multi-entity visibility across Singapore and global markets.',
  },
  {
    label: 'Asset Management',
    icon: Building2,
    detail: 'Governance, structure, and disciplined stakeholder reporting.',
  },
  {
    label: 'Education & EdTech',
    icon: BookOpen,
    detail: 'Growth planning, recurring revenue insight, and spending control.',
  },
]

function useDesktopMotion() {
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

export default function IndustriesSection() {
  const reduceMotion = useReducedMotion()
  const allowMotion = useDesktopMotion() && !reduceMotion

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-[#fbfaff] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#843CDA]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#3970E2]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#843CDA]">
              Industries
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-[#17120d] sm:text-4xl lg:text-5xl">
              Trusted Across Industries
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#554b61]">
              We understand the financial metrics, reporting expectations, and
              growth challenges specific to each business model we support.
            </p>

            <div className="mt-8 rounded-[2rem] border border-[#ece8e3] bg-white p-6 shadow-[0_18px_60px_rgba(28,24,90,0.08)]">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#843CDA]">
                Why this matters
              </p>
              <p className="mt-4 text-base font-semibold leading-8 text-[#4f485c]">
                Different industries break in different ways. The reporting cadence,
                margin structure, investor questions, and compliance pressure for a
                fintech company are not the same as for a D2C brand or a
                venture-backed SaaS business. We build finance support around that
                reality.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = industry.icon

              return (
                <motion.article
                  key={industry.label}
                  initial={allowMotion ? { opacity: 0, y: 22 } : false}
                  whileInView={allowMotion ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.45, delay: index * 0.04, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="group rounded-[1.75rem] border border-[#e7e1f3] bg-white p-5 shadow-[0_16px_44px_rgba(28,24,90,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(81,85,225,0.1)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#3970E2,#843CDA)] text-white shadow-[0_12px_30px_rgba(81,85,225,0.22)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-black leading-7 text-[#17120d]">
                    {industry.label}
                  </h3>
                  <p className="mt-2 text-sm font-semibold leading-7 text-[#5f586b]">
                    {industry.detail}
                  </p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
