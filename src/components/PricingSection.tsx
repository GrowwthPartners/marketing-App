import { useState } from 'react'
import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  FileText,
  SlidersHorizontal,
} from 'lucide-react'
import ConsultationFormModal from './ConsultationFormModal'

const engagementNotes = [
  { icon: SlidersHorizontal, label: 'All engagements customised to your business' },
  { icon: FileText, label: 'No long-term contracts' },
  { icon: BadgeDollarSign, label: 'No setup fees' },
]

export default function PricingSection() {
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
          <div className="grid gap-8 rounded-[2.5rem] border border-[#ece8e3] bg-[linear-gradient(135deg,#ffffff_0%,#f8f6ff_52%,#fff8fc_100%)] p-6 shadow-[0_24px_80px_rgba(28,24,90,0.1)] sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#843CDA]">
                Custom Pricing
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-[#17120d] sm:text-4xl lg:text-5xl">
                Customisable Pricing for Customisable Needs
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#554b61]">
                At Growwth, we don't believe in one-size-fits-all. Every business is
                at a different stage, with different challenges and different goals.
              </p>
              <p className="mt-4 text-lg leading-8 text-[#554b61]">
                So instead of forcing you into a preset package, we build a plan
                around what your business actually needs.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#ece8e3] bg-white p-6 shadow-[0_18px_60px_rgba(28,24,90,0.08)] sm:p-7">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#843CDA]">
                Tailored for your stage
              </p>
              <p className="mt-4 text-lg font-semibold leading-8 text-[#4f485c]">
                Fill in your details and we'll reach out with a pricing plan tailored
                to you.
              </p>
              <button
                type="button"
                onClick={() => setIsConsultationModalOpen(true)}
                className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(100deg,#3970E2_0%,#5155E1_34%,#843CDA_68%,#EE8CB6_100%)] px-7 py-4 text-base font-black text-white shadow-[0_18px_44px_rgba(81,85,225,0.26)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5155E1]"
              >
                Check Price
                <ArrowRight
                  className="h-5 w-5 transition group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
            </div>
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
