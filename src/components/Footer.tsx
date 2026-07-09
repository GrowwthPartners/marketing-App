import { ArrowUpRight } from 'lucide-react'

const footerLinks = [
  { label: 'About Growwth Partners', href: 'https://growwthpartners.com/' },
  { label: 'Privacy Policy', href: 'https://growwthpartners.com/privacy-policy' },
  { label: 'Terms of Service', href: 'https://growwthpartners.com/terms' },
]

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative overflow-hidden border-t border-[#e5def4] bg-[linear-gradient(180deg,#f8f6ff_0%,#f5f1ff_52%,#fdf8fc_100%)] text-[#17120d]"
    >
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#3970E2]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#EE8CB6]/14 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div className="rounded-[2rem] border border-[#ece8e3] bg-[linear-gradient(135deg,#ffffff_0%,#f8f6ff_55%,#fff8fc_100%)] p-6 shadow-[0_20px_70px_rgba(28,24,90,0.08)] sm:p-8">
          

            <h2 className="mt-5 max-w-3xl text-2xl font-black leading-tight tracking-[-0.03em] text-[#17120d] sm:text-3xl lg:text-[2rem]">
              Growwth Partners
            </h2>
            <p className="mt-3 max-w-3xl text-base font-semibold leading-8 text-[#5b5369] sm:text-lg">
              Singapore-headquartered. Serving 200+ businesses across SG, UAE, AU,
              and US with senior finance leadership built for founders, operators,
              and growth-stage teams.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#ece8e3] bg-white p-5 shadow-[0_20px_70px_rgba(28,24,90,0.08)] sm:p-6">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#843CDA]">
              Quick Links
            </p>

            <div className="mt-5 grid gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-[#ece8e3] bg-[#fcfbff] px-4 py-3.5 text-sm font-semibold text-[#27214f] transition hover:border-[#843CDA]/35 hover:bg-[#f7f5ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5155E1] sm:text-base"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    className="h-4 w-4 text-[#843CDA] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#ded6ef] pt-5">
          <p className="text-center text-sm font-semibold text-[#6b6476]">
            Copyright © 2026 Growwth Partners. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
