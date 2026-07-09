import { Award, ExternalLink, Globe2, Mail, Medal, Users } from 'lucide-react'
import jatinCeo from '../assets/hero/jatin-ceo.jpeg'

const credibility = [
  { icon: Award, label: "Asia's Greatest CFO Award" },
  { icon: Users, label: '250+ founders mentored' },
  { icon: Globe2, label: '2 decades serving Singapore businesses' },
  { icon: Medal, label: 'Golden Globe Tigers Award' },
]

export default function MeetJatinSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-full bg-[linear-gradient(135deg,#3970E2,#843CDA,#EE8CB6)] opacity-20 blur-2xl"
          />
          <div className="relative rounded-[2.5rem] border border-[#ece8e3] bg-[#fbfaff] p-6 text-center shadow-[0_26px_90px_rgba(28,24,90,0.14)]">
            <div className="mx-auto h-64 w-64 overflow-hidden rounded-full border-8 border-white bg-white shadow-[0_22px_70px_rgba(28,24,90,0.18)] sm:h-72 sm:w-72 lg:h-80 lg:w-80">
              <img
                src={jatinCeo}
                alt="Jatin Detwani, founder of Growwth Partners"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <p className="mt-6 text-sm font-black uppercase tracking-[0.22em] text-[#843CDA]">
              Founder, Growwth Partners
            </p>
            <p className="mt-2 text-2xl font-black text-[#17120d]">Jatin Detwani</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="mailto:jd@growwthpartners.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(100deg,#3970E2_0%,#5155E1_35%,#843CDA_70%,#EE8CB6_100%)] px-5 py-3 text-sm font-black text-white shadow-[0_16px_42px_rgba(81,85,225,0.22)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5155E1]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email Jatin
              </a>
              <a
                href="https://www.linkedin.com/in/jatin-detwani/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#dcd7ea] bg-white px-5 py-3 text-sm font-black text-[#27214f] shadow-sm transition hover:-translate-y-0.5 hover:border-[#5155E1]/40 hover:bg-[#f7f5ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5155E1]"
              >
                <ExternalLink className="h-4 w-4 text-[#5155E1]" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#843CDA]">
            Meet Jatin
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-[#17120d] sm:text-4xl lg:text-5xl">
            Led by One of Asia's Top CFOs
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#554b61]">
            <p>
              Jatin Detwani founded Growwth Partners after two decades serving
              Singapore businesses across finance, fundraising, and growth strategy.
              He's been recognised as one of Asia's Greatest CFOs and has personally
              mentored 250+ founders across Singapore, the UAE, Australia, and the US.
            </p>
            <p>
              When you work with Growwth Partners, your engagement is personally
              guided by Jatin, not just supervised from a distance. Strategic decisions,
              fundraising prep, and complex advisory work go through him.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {credibility.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-[#ece8e3] bg-[#fbfaff] px-4 py-3 text-sm font-black text-[#27214f]"
                >
                  <Icon className="h-5 w-5 text-[#5155E1]" aria-hidden="true" />
                  {item.label}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
