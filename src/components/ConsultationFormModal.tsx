import { useEffect, useId, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import {
  ArrowRight,
  Building,
  CalendarCheck,
  ChevronDown,
  CheckCircle2,
  Clock3,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  User,
  X,
} from 'lucide-react'
import {
  mapGeneralContactPayload,
  sendToContactApi,
  type ContactFormData,
} from '../lib/contactApi'

interface ConsultationFormModalProps {
  isOpen: boolean
  onClose: () => void
}

const services = [
  'Part-Time/Fractional CFO',
  'Financial Modelling',
  'Accounting Services',
  'Bookkeeping',
  'Payroll',
  'Taxation & Compliance',
  'Corporate Secretary',
  'Company Incorporation',
  'Valuation',
  'Due Diligence',
  'Pitch Your StartUp',
  'Investor Growth Services',
  'Other',
]

const countryCodes = [
  { code: '+65', country: 'Singapore' },
  { code: '+971', country: 'UAE' },
  { code: '+61', country: 'Australia' },
  { code: '+1', country: 'USA' },
  { code: '+44', country: 'UK' },
  { code: '+91', country: 'India' },
  { code: '+49', country: 'Germany' },
  { code: '+33', country: 'France' },
  { code: '+81', country: 'Japan' },
  { code: '+86', country: 'China' },
  { code: '+82', country: 'South Korea' },
  { code: '+7', country: 'Russia' },
  { code: '+39', country: 'Italy' },
  { code: '+34', country: 'Spain' },
  { code: '+55', country: 'Brazil' },
  { code: '+52', country: 'Mexico' },
  { code: '+31', country: 'Netherlands' },
  { code: '+41', country: 'Switzerland' },
  { code: '+46', country: 'Sweden' },
  { code: '+47', country: 'Norway' },
  { code: '+45', country: 'Denmark' },
  { code: '+358', country: 'Finland' },
  { code: '+64', country: 'New Zealand' },
  { code: '+27', country: 'South Africa' },
  { code: '+966', country: 'Saudi Arabia' },
]

const initialFormData: ContactFormData = {
  name: '',
  company: '',
  email: '',
  countryCode: '+65',
  phone: '',
  service: 'Part-Time/Fractional CFO',
}

const modalHighlights = [
  { icon: Clock3, label: '30-minute clarity call' },
  { icon: ShieldCheck, label: 'Senior finance guidance' },
  { icon: Sparkles, label: 'No agency handoff' },
]

const fieldBaseClass =
  'h-12 w-full rounded-2xl border bg-white/95 text-sm font-semibold text-[#17120d] outline-none transition placeholder:text-[#9b96a8] focus:border-[#5155E1] focus:ring-4 focus:ring-[#5155E1]/10'

const selectClass =
  'appearance-none'

const iconClass =
  'absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8b8798]'

function getFieldClass(hasError?: boolean, extraClass = '') {
  return `${fieldBaseClass} ${extraClass} ${
    hasError ? 'border-[#d92d20]' : 'border-[#e2deea]'
  }`
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null

  return <p className="text-xs font-bold text-[#d92d20]">{message}</p>
}

export default function ConsultationFormModal({
  isOpen,
  onClose,
}: ConsultationFormModalProps) {
  const titleId = useId()
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target

    setFormData((prev) => ({ ...prev, [name]: value }))
    setStatus('idle')

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    const email = formData.email.trim()

    if (!formData.name.trim()) newErrors.name = 'Please enter your name'
    if (!formData.company.trim()) newErrors.company = 'Please enter your company name'
    if (!email) {
      newErrors.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number'
    if (!formData.service) newErrors.service = 'Please select a service'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('idle')

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const payload = mapGeneralContactPayload({
        ...formData,
        name: formData.name.trim(),
        company: formData.company.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
      })

      await sendToContactApi(payload)
      setStatus('success')
      setErrors({})
      setFormData(initialFormData)
    } catch (error) {
      console.error('Error submitting consultation form:', error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[#111827]/65 px-3 py-3 backdrop-blur-md sm:items-center sm:px-5 sm:py-8"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative grid max-h-[94vh] w-full max-w-5xl overflow-hidden rounded-[2rem] bg-[#fbfaff] shadow-[0_34px_120px_rgba(17,24,39,0.34)] ring-1 ring-white/20 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/90 text-[#27214f] shadow-[0_10px_30px_rgba(28,24,90,0.16)] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Close consultation form"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <aside className="relative hidden flex-col gap-6 overflow-hidden bg-[linear-gradient(140deg,#3970E2_0%,#5155E1_34%,#843CDA_68%,#EE8CB6_100%)] px-5 py-6 text-white sm:px-7 lg:flex lg:min-h-[43rem] lg:gap-8 lg:p-8">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 left-8 h-64 w-64 rounded-full bg-[#EE8CB6]/30 blur-3xl"
          />

          <div className="relative pr-12">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/90 backdrop-blur">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Free CFO Consultation
            </div>
            <h2 id={titleId} className="max-w-md text-3xl font-black leading-tight sm:text-4xl">
              Book a focused finance leadership call.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/86 sm:text-base">
              Share where your finance function needs support. We will use the
              details to route your request and prepare a sharper first conversation.
            </p>
          </div>

          <div className="relative flex min-h-0 flex-1 flex-col justify-between gap-6">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {modalHighlights.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/12 px-4 py-3 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#5155E1]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {item.label}
                  </div>
                )
              })}
            </div>

            <div className="rounded-[1.5rem] border border-white/20 bg-white/12 p-4 backdrop-blur">
              <p className="text-sm font-black text-white">What happens next?</p>
              <p className="mt-2 text-sm leading-6 text-white/82">
                After submission, our team reviews your details and follows up with
                the most relevant next step for your business.
              </p>
            </div>
          </div>
        </aside>

        <div className="max-h-[94vh] overflow-y-auto px-5 py-6 sm:px-7 lg:px-8 lg:py-8">
          {status === 'success' ? (
            <div className="flex min-h-[26rem] flex-col justify-center rounded-[2rem] border border-[#c9f0d6] bg-[linear-gradient(180deg,#f0fff5_0%,#ffffff_100%)] p-6 text-[#14532d] shadow-[0_20px_60px_rgba(20,83,45,0.08)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#dcfce7] text-[#16a34a]">
                <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-3xl font-black text-[#14532d]">
                Request received.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-[#24613a]">
                Thank you. We have received your details and will follow up shortly
                with the right next step.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-7 inline-flex w-fit rounded-full bg-[#17120d] px-6 py-3 text-sm font-black text-white transition hover:bg-[#27214f] cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6 pr-12">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#843CDA]">
                  Free 30-Min Consultation
                </p>
                <h3 className="mt-2 text-2xl font-black leading-tight text-[#17120d] sm:text-3xl">
                  A few details before we connect.
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#686174]">
                  This keeps the first call practical and specific to your finance
                  needs.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block space-y-2">
                    <span className="text-sm font-black text-[#27214f]">Name *</span>
                    <span className="relative block">
                      <User className={iconClass} aria-hidden="true" />
                      <input
                        id="consultation-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={getFieldClass(Boolean(errors.name), 'pl-10 pr-4')}
                        required
                      />
                    </span>
                    <FieldError message={errors.name} />
                  </label>

                  <label className="block space-y-2">
                    <span className="text-sm font-black text-[#27214f]">
                      Company Name *
                    </span>
                    <span className="relative block">
                      <Building className={iconClass} aria-hidden="true" />
                      <input
                        id="consultation-company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className={getFieldClass(Boolean(errors.company), 'pl-10 pr-4')}
                        required
                      />
                    </span>
                    <FieldError message={errors.company} />
                  </label>
                </div>

                <label className="block space-y-2">
                  <span className="text-sm font-black text-[#27214f]">
                    Email Address *
                  </span>
                  <span className="relative block">
                    <Mail className={iconClass} aria-hidden="true" />
                    <input
                      id="consultation-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@company.com"
                      className={getFieldClass(Boolean(errors.email), 'pl-10 pr-4')}
                      required
                    />
                  </span>
                  <FieldError message={errors.email} />
                </label>

                <div className="space-y-2">
                  <span className="text-sm font-black text-[#27214f]">
                    Phone Number *
                  </span>
                  <div className="grid grid-cols-[7.75rem_minmax(0,1fr)] gap-2 sm:grid-cols-[10rem_minmax(0,1fr)]">
                    <span className="relative block">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className={getFieldClass(false, `${selectClass} pl-3 pr-10`)}
                        aria-label="Select country code"
                      >
                        {countryCodes.map((country) => (
                          <option key={`${country.country}-${country.code}`} value={country.code}>
                            {country.code} {country.country}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5155E1]"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="relative block">
                      <Phone className={iconClass} aria-hidden="true" />
                      <input
                        id="consultation-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className={getFieldClass(Boolean(errors.phone), 'pl-10 pr-4')}
                        required
                      />
                    </span>
                  </div>
                  <FieldError message={errors.phone} />
                </div>

                <label className="block space-y-2">
                  <span className="text-sm font-black text-[#27214f]">
                    Service Looking For *
                  </span>
                  <span className="relative block">
                    <select
                      id="consultation-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={getFieldClass(
                        Boolean(errors.service),
                        `${selectClass} pl-4 pr-12`,
                      )}
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#5155E1]"
                      aria-hidden="true"
                    />
                  </span>
                  <FieldError message={errors.service} />
                </label>

                {status === 'error' && (
                  <p className="rounded-2xl border border-[#fecdca] bg-[#fff5f4] px-4 py-3 text-sm font-bold text-[#b42318]">
                    There was a problem submitting your request. Please try again.
                  </p>
                )}

                <div className="rounded-[1.5rem] border border-[#e8e4f7] bg-white p-3 shadow-[0_14px_40px_rgba(28,24,90,0.06)]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(100deg,#3970E2_0%,#5155E1_34%,#843CDA_68%,#EE8CB6_100%)] px-6 py-4 cursor-pointer text-base font-black text-white shadow-[0_16px_42px_rgba(81,85,225,0.24)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    <ArrowRight
                      className="h-5 w-5 transition group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>
                  <p className="mt-3 text-center text-xs font-semibold leading-5 text-[#776f83]">
                    By submitting, you agree to be contacted about your consultation
                    request.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
