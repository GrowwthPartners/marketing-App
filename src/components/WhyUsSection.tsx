import { Award, MessageCircle, UsersRound } from 'lucide-react'

const differentiators = [
  {
    icon: Award,
    title: 'Senior CFOs, Not Junior Consultants',
    body: 'Every account is led by a senior CFO with 10+ years of experience. No bait-and-switch, no offshore handoffs, no AI chatbots between you and a real expert. You always speak directly to someone who can make decisions.',
  },
  {
    icon: UsersRound,
    title: 'Selective by Design',
    body: "We accept only a small number of new businesses each year. This isn't scarcity marketing. It's how we stay senior, responsive, and personally invested in every client's success. You're never one of hundreds in a pipeline.",
  },
  {
    icon: MessageCircle,
    title: 'Always a Call or Text Away',
    body: 'No ticketing systems. No 48-hour response SLAs. When you need your CFO, you reach them directly. Your engagement is built around your business rhythm, not ours.',
  },
]

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#fbfaff] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#EE8CB6]/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#843CDA]">
            Why Us
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-[#17120d] sm:text-4xl lg:text-5xl">
            Why Founders Choose Growwth Partners Over an Agency
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#554b61]">
            Most CFO firms in Singapore put a junior consultant on your account and
            use a senior partner's name as the marketing badge. We work differently.
            Growwth Partners is intentionally tight-knit. We take on only a selected
            number of businesses each year so every engagement is led by senior CFOs
            with 10+ years of experience, personally guided by Jatin Detwani.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {differentiators.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className="rounded-[2rem] border border-[#ece8e3] bg-white p-6 shadow-[0_18px_60px_rgba(28,24,90,0.08)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#3970E2,#843CDA)] text-white shadow-[0_14px_36px_rgba(81,85,225,0.24)]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-[#17120d]">{item.title}</h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-[#5f586b]">
                  {item.body}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
