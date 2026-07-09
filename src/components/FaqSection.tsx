import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: "What's the difference between a Virtual CFO and a Fractional CFO?",
    answer:
      'The terms are often used interchangeably. Both mean a senior CFO working with you on a part-time, ongoing basis instead of as a full-time hire. We offer both, and the engagement structure depends on your needs.',
  },
  {
    question: 'How quickly can you start?',
    answer:
      "Most engagements begin within 1-2 weeks of the initial consultation. We move fast because we've built our process around founder timelines.",
  },
  {
    question: 'Do you work with pre-revenue startups?',
    answer:
      'We typically work with companies that have product-market fit and recurring revenue (SGD 50K+/month). For earlier-stage founders, we recommend a one-off financial model consultation.',
  },
  {
    question: 'What if I just need help with fundraising?',
    answer:
      'Many of our clients engage us specifically for fundraising prep: financial models, investor reporting, and data room preparation. We can scope a focused engagement around that.',
  },
  {
    question: 'Will I work directly with Jatin?',
    answer:
      'Jatin personally guides every engagement, especially on fundraising, fund structuring, and complex advisory. Your day-to-day point of contact will be a senior CFO from our team selected to match your industry and stage.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes. No long-term contracts. Most clients stay because the partnership works, not because they are locked in.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute right-0 top-16 h-80 w-80 rounded-full bg-[#EE8CB6]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#843CDA]">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-[#17120d] sm:text-4xl lg:text-5xl">
            Common Questions
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-[1.75rem] border bg-white shadow-[0_18px_60px_rgba(28,24,90,0.08)] transition ${
                  isOpen
                    ? 'border-[#5155E1]/30 ring-4 ring-[#5155E1]/8'
                    : 'border-[#ece8e3]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-lg font-black leading-7 text-[#17120d] sm:text-xl">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen
                        ? 'bg-[#5155E1] text-white'
                        : 'bg-[#f7f5ff] text-[#5155E1]'
                    }`}
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#ece8e3] px-5 pb-5 pt-4 text-base font-semibold leading-8 text-[#5f586b] sm:px-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
