import { AlertTriangle, Banknote, FileQuestion, Gauge, Landmark, LineChart } from 'lucide-react'

const problems = [
  {
    icon: LineChart,
    text: 'Cash flow is unpredictable and runway is harder to forecast',
  },
  {
    icon: FileQuestion,
    text: "Investors are asking for reports you don't have in the format they expect",
  },
  {
    icon: Gauge,
    text: "You're making pricing, hiring, and spend decisions on instinct rather than numbers",
  },
  {
    icon: Landmark,
    text: 'IRAS, ACRA, and the 2026 e-invoicing mandate are adding compliance complexity',
  },
  {
    icon: Banknote,
    text: 'A full-time CFO costs SGD 300,000+ per year, not feasible at this stage',
  },
]

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f0d9e8] bg-[#fff5fb] px-4 py-2 text-sm font-black text-[#843CDA]">
              <AlertTriangle className="h-4 w-4" aria-hidden="true" />
              The finance gap
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-[-0.03em] text-[#17120d] sm:text-4xl lg:text-5xl">
              Most Singapore Founders Outgrow Their Accountant Before They're Ready
              to Hire a CFO
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#554b61]">
              There's a stage every growing Singapore business hits. Your accountant
              handles compliance well, but you're flying blind on the strategic finance
              decisions that matter most:
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#ece8e3] bg-[#fbfaff] p-3 shadow-[0_24px_80px_rgba(28,24,90,0.1)]">
            <div className="grid gap-3">
              {problems.map((problem) => {
                const Icon = problem.icon

                return (
                  <div
                    key={problem.text}
                    className="flex gap-4 rounded-[1.35rem] border border-[#eeeaf6] bg-white p-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f7f5ff] text-[#5155E1]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="text-sm font-bold leading-6 text-[#27214f] sm:text-base">
                      {problem.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] bg-[linear-gradient(100deg,#3970E2_0%,#5155E1_34%,#843CDA_68%,#EE8CB6_100%)] p-6 text-white shadow-[0_22px_70px_rgba(81,85,225,0.22)] lg:p-8">
          <p className="max-w-5xl text-2xl font-black leading-tight tracking-[-0.02em] lg:text-3xl">
            You don't need a full-time CFO. You need a senior one, embedded in your
            business, for a fraction of the cost.
          </p>
        </div>
      </div>
    </section>
  )
}
