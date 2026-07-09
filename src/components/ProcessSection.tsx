import { motion, useReducedMotion } from 'framer-motion'
import {
  CalendarDays,
  CheckCircle2,
  FileStack,
  Handshake,
  LineChart,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Free 30-Min Consultation',
    description:
      'A senior CFO from our team meets with you. No sales pitch. We listen, ask the right questions, and tell you honestly whether we are a fit.',
    icon: CalendarDays,
    meta: 'Intro call',
    accent: 'from-[#3970E2] to-[#5155E1]',
  },
  {
    number: '02',
    title: 'Custom Proposal',
    description:
      'If there is a fit, we design an engagement around your actual needs: scope, deliverables, timing, and pricing. No template plans.',
    icon: FileStack,
    meta: 'Tailored scope',
    accent: 'from-[#5155E1] to-[#843CDA]',
  },
  {
    number: '03',
    title: 'Onboarding (Week 1-2)',
    description:
      'We assess your current finance setup, build reporting frameworks, and align on the first 90-day priorities. You meet your dedicated senior CFO.',
    icon: Handshake,
    meta: 'Fast setup',
    accent: 'from-[#843CDA] to-[#B65AD8]',
  },
  {
    number: '04',
    title: 'Ongoing CFO Support',
    description:
      'Monthly strategy sessions, structured reporting, and direct access whenever you need us. We become an extension of your team.',
    icon: LineChart,
    meta: 'Monthly momentum',
    accent: 'from-[#B65AD8] to-[#EE8CB6]',
  },
]

const processBenefits = [
  'Senior CFO involvement from the start',
  'Clear deliverables, timing, and ownership',
  'First 90-day priorities aligned early',
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

export default function ProcessSection() {
  const reduceMotion = useReducedMotion()
  const allowMotion = useDesktopMotion() && !reduceMotion

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#3970E2]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#EE8CB6]/12 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#843CDA]">
              How It Works
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-[#17120d] sm:text-4xl lg:text-5xl">
              How We Start Working Together
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#554b61]">
              A structured onboarding path built for founder speed, finance clarity,
              and direct access to senior leadership from day one.
            </p>

            <div className="mt-8 rounded-[2rem] border border-[#ece8e3] bg-[#fbfaff] p-6 shadow-[0_18px_60px_rgba(28,24,90,0.06)]">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#843CDA]">
                What you can expect
              </p>
              <div className="mt-5 space-y-4">
                {processBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#5155E1] shadow-[0_10px_24px_rgba(81,85,225,0.12)]">
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="text-base font-semibold leading-7 text-[#4f485c]">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-6 top-8 hidden w-px bg-[linear-gradient(180deg,#3970E2_0%,#843CDA_60%,#EE8CB6_100%)] lg:block"
            />

            <div className="space-y-5">
              {steps.map((step, index) => {
                const Icon = step.icon

                return (
                  <motion.article
                    key={step.number}
                    initial={allowMotion ? { opacity: 0, x: 28 } : false}
                    whileInView={allowMotion ? { opacity: 1, x: 0 } : undefined}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.22 }}
                    className="relative rounded-[2rem] border border-[#ece8e3] bg-white p-5 shadow-[0_22px_70px_rgba(28,24,90,0.08)] sm:p-6 lg:ml-10"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                      <div className="flex items-center gap-4 sm:block">
                        <div
                          className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r ${step.accent} text-white shadow-[0_14px_36px_rgba(28,24,90,0.16)]`}
                        >
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="sm:mt-4">
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b2a8c6]">
                            Step {step.number}
                          </p>
                          <p className="mt-1 text-sm font-black text-[#5155E1]">
                            {step.meta}
                          </p>
                        </div>
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-black leading-tight text-[#17120d] sm:text-2xl">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-base font-semibold leading-7 text-[#5f586b]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
