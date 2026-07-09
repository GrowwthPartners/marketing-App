import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Building2,
  ClipboardCheck,
  FileSpreadsheet,
  Landmark,
  WalletCards,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const services = [
  {
    icon: BarChart3,
    title: 'Strategic Financial Planning',
    body: 'Cash flow forecasting, runway analysis, scenario modelling, and budgets built around your growth plan, not generic templates.',
    highlight: 'Forecast with confidence',
    accent: 'from-[#3970E2] to-[#5155E1]',
  },
  {
    icon: FileSpreadsheet,
    title: 'Fundraising & Investor Reporting',
    body: "Series A-ready financial models, investor decks, board reports, and data room preparation. We've helped clients raise from seed to pre-IPO.",
    highlight: 'Investor-ready finance',
    accent: 'from-[#5155E1] to-[#843CDA]',
  },
  {
    icon: WalletCards,
    title: 'Cash Flow & Burn Rate Management',
    body: '13-week cash flow forecasts, burn rate analysis, and proactive flagging before issues become emergencies.',
    highlight: 'Protect runway early',
    accent: 'from-[#6A4DE8] to-[#9C57E8]',
  },
  {
    icon: Landmark,
    title: 'Singapore Compliance, Handled',
    body: 'IRAS-aligned reporting, ACRA filings, GST submissions, and 2026 e-invoicing readiness, built into your finance operations from day one.',
    highlight: 'Stay compliant quietly',
    accent: 'from-[#843CDA] to-[#B65AD8]',
  },
  {
    icon: ClipboardCheck,
    title: 'Financial Hygiene & Audit Readiness',
    body: 'While we handle the strategic work, we keep your books clean and audit-ready in the background. You stay investor-ready, always.',
    highlight: 'Clean books, less friction',
    accent: 'from-[#A84ED5] to-[#D96AB1]',
  },
  {
    icon: Building2,
    title: 'Multi-Jurisdiction Operations',
    body: 'Cross-border tax structuring, multi-entity consolidation, and global finance ops across Singapore, UAE, Australia, and the US.',
    highlight: 'Built for cross-border growth',
    accent: 'from-[#D96AB1] to-[#EE8CB6]',
  },
]

const sectionPoints = [
  'Senior CFO guidance, not junior handoffs',
  'Built for Singapore and cross-border operators',
  'Structured for fundraising, reporting, and control',
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

export default function ServicesSection() {
  const reduceMotion = useReducedMotion()
  const allowMotion = useDesktopMotion() && !reduceMotion

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#fbfaff] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute left-0 top-16 h-72 w-72 rounded-full bg-[#3970E2]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-28 h-80 w-80 rounded-full bg-[#EE8CB6]/12 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#843CDA]">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-[#17120d] sm:text-4xl lg:text-5xl">
              Senior Finance Leadership, Made for Singapore Founders
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#554b61]">
              We handle the strategic CFO work while quietly keeping your financial
              hygiene investor-ready. So when opportunity knocks, you are never the
              reason the deal slows down.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {sectionPoints.map((point, index) => (
              <div
                key={point}
                className={`rounded-[1.5rem] border border-white/70 bg-white/90 p-4 shadow-[0_16px_44px_rgba(28,24,90,0.07)] ${
                  index === 1 ? 'sm:-translate-y-3' : ''
                }`}
              >
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#843CDA]">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="mt-3 text-base font-black leading-6 text-[#27214f]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.article
                key={service.title}
                initial={allowMotion ? { opacity: 0, y: 24 } : false}
                whileInView={allowMotion ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.22 }}
                className="group relative overflow-hidden rounded-[2rem] border border-[#ece8e3] bg-white p-6 shadow-[0_18px_60px_rgba(28,24,90,0.07)] transition hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(81,85,225,0.12)]"
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 rounded-t-[2rem] bg-gradient-to-r ${service.accent}`}
                />

                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${service.accent} text-white shadow-[0_14px_36px_rgba(28,24,90,0.16)]`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-[#f7f5ff] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#5155E1]">
                    {service.highlight}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-black leading-8 text-[#17120d]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-[#5f586b]">
                  {service.body}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#5155E1]">
                  Included in your CFO engagement
                  <ArrowRight
                    className="h-4 w-4 transition group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
