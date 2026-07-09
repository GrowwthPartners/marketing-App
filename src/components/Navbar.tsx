import { useState } from 'react'

import { ArrowRight, Menu } from 'lucide-react'
import companyLogo from '../assets/company-logo.png'
import ConsultationFormModal from './ConsultationFormModal'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Client Stories', href: '#stories' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

  const openConsultationModal = () => setIsConsultationModalOpen(true)
  const closeConsultationModal = () => setIsConsultationModalOpen(false)
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-[linear-gradient(100deg,#3970E2_0%,#5155E1_34%,#843CDA_68%,#EE8CB6_100%)] shadow-[0_18px_50px_rgba(57,112,226,0.22)]">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8"
      >
        <a
          href="/"
          aria-label="Growwth Partners home"
          className="inline-flex items-center rounded-2xl bg-white px-2 py-1.5 shadow-[0_12px_32px_rgba(22,28,90,0.18)] ring-1 ring-white/70 transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(22,28,90,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-2.5"
        >
          <img
            src={companyLogo}
            alt="Growwth Partners"
            className="h-11 w-auto sm:h-11"
          />
        </a>

        <div className="hidden items-center rounded-full border border-white/18 bg-white/10 p-1.5 shadow-[0_14px_32px_rgba(26,28,90,0.12)] backdrop-blur lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2.5 text-[15px] font-semibold text-white/92 transition hover:bg-white/14 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center lg:flex">
          <button
            onClick={openConsultationModal}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-bold text-[#5155E1] shadow-[0_14px_34px_rgba(20,28,90,0.2)] transition hover:-translate-y-0.5 hover:bg-[#fff4fb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white cursor-pointer"
          >
            Book a Call
            <ArrowRight
              className="h-4 w-4 transition group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </button>
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/35 bg-white/15 text-white shadow-sm backdrop-blur transition hover:bg-white/25 [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open navigation menu</span>
            <Menu className="h-5 w-5" aria-hidden="true" />
          </summary>
          <div className="absolute right-0 mt-3 w-[min(88vw,22rem)] overflow-hidden rounded-[1.5rem] border border-white/20 bg-white p-3 shadow-[0_24px_70px_rgba(28,24,90,0.22)]">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl border border-transparent px-4 py-3 text-base font-semibold text-[#27214f] transition hover:border-[#ece6fb] hover:bg-[#f4f1ff] hover:text-[#5155E1]"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={openConsultationModal}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(100deg,#3970E2_0%,#5155E1_34%,#843CDA_68%,#EE8CB6_100%)] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(81,85,225,0.24)]"
            >
              Book a Call
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </details>
      </nav>
      <ConsultationFormModal
        isOpen={isConsultationModalOpen}
        onClose={closeConsultationModal}
      />
    </header>
  )
}
