import { ArrowRight, Layers3, SlidersHorizontal } from 'lucide-react'

export default function CustomisationSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.5rem] bg-[linear-gradient(100deg,#3970E2_0%,#5155E1_34%,#843CDA_68%,#EE8CB6_100%)] p-1 shadow-[0_28px_90px_rgba(81,85,225,0.24)]">
          <div className="grid gap-8 rounded-[2.25rem] bg-white p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#3970E2,#843CDA)] text-white">
                <SlidersHorizontal className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#843CDA]">
                Customised by design
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-[#17120d] sm:text-4xl lg:text-5xl">
                Every Business Is Different. We Don't Templatise.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-[#554b61]">
              <p>
                Some founders need help preparing for Series A. Some need cash flow
                forecasting and KPI tracking. Some are scaling cross-border and need
                multi-jurisdiction expertise. Some just need an experienced finance
                leader to think alongside them.
              </p>
              <p>
                We design every engagement around what your business actually needs,
                not a pre-packaged service tier. Your scope, your pace, your priorities.
                You'll know exactly what we're working on, and why.
              </p>

              <div className="mt-8 flex flex-col gap-3 rounded-[1.5rem] border border-[#ece8e3] bg-[#fbfaff] p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#5155E1]">
                    <Layers3 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-black leading-6 text-[#27214f]">
                    Your scope. Your pace. Your priorities.
                  </p>
                </div>
                <ArrowRight className="hidden h-5 w-5 text-[#843CDA] sm:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
