import { Head } from "vite-react-ssg";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  ShieldCheck,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const nextSteps = [
  {
    icon: Clock3,
    title: "Review in progress",
    body: "Our team reviews your details and aligns the request with the right finance support path.",
  },
  {
    icon: CalendarDays,
    title: "Follow-up shortly",
    body: "You can expect a timely follow-up with the next step that fits your business stage and needs.",
  },
  {
    icon: FileText,
    title: "A sharper first conversation",
    body: "Your submission helps us make the first call more practical, focused, and relevant.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <Head>
        <title>Thank You | Growwth Partners</title>
        <meta
          name="description"
          content="Thank you for contacting Growwth Partners. Our team will review your request and follow up shortly."
        />
      </Head>

      <div className="flex min-h-screen flex-col bg-white text-[#17120d]">
        <Navbar />

        <main className="relative flex-1 overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7f5ff_40%,#ffffff_100%)]">
          <div
            aria-hidden="true"
            className="absolute left-0 top-16 h-72 w-72 rounded-full bg-[#3970E2]/12 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute right-0 top-24 h-80 w-80 rounded-full bg-[#EE8CB6]/16 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#843CDA]/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d9f0e3] bg-white px-4 py-2 text-sm font-black text-[#16a34a] shadow-[0_12px_32px_rgba(20,83,45,0.08)]">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  Submission received
                </div>

                <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-[#17120d] sm:text-5xl lg:text-6xl">
                  Thank you. Your consultation request is in.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f586b] sm:text-xl">
                  We have received your details and our team will review them
                  shortly to prepare the most relevant next step for your
                  business.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(100deg,#3970E2_0%,#5155E1_34%,#843CDA_68%,#EE8CB6_100%)] px-6 py-3.5 text-sm font-black text-white shadow-[0_18px_44px_rgba(81,85,225,0.24)] transition hover:-translate-y-0.5"
                  >
                    Back to Home
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://calendly.com/jd-growwthpartners/demo"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e3dcf2] bg-white px-6 py-3.5 text-sm font-black text-[#5155E1] shadow-[0_12px_34px_rgba(28,24,90,0.08)] transition hover:bg-[#f7f5ff]"
                  >
                    Book directly on Calendly
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-[2.5rem] bg-[linear-gradient(100deg,#3970E2,#843CDA,#EE8CB6)] opacity-18 blur-xl"
                />

                <div className="relative overflow-hidden rounded-[2.5rem] border border-[#ece8e3] bg-white p-6 shadow-[0_28px_90px_rgba(28,24,90,0.12)] sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.4rem] bg-[#dcfce7] text-[#16a34a] shadow-[0_14px_34px_rgba(20,83,45,0.12)]">
                      <ShieldCheck className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#843CDA]">
                        What happens next
                      </p>
                      <h2 className="mt-2 text-2xl font-black leading-tight text-[#17120d] sm:text-3xl">
                        We will take it from here.
                      </h2>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {nextSteps.map((step) => {
                      const Icon = step.icon;

                      return (
                        <div
                          key={step.title}
                          className="rounded-[1.5rem] border border-[#ece8e3] bg-[#fcfbff] p-4 shadow-[0_12px_32px_rgba(28,24,90,0.05)]"
                        >
                          <div className="flex items-start gap-3">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f7f5ff] text-[#5155E1]">
                              <Icon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <div>
                              <p className="text-base font-black text-[#17120d]">
                                {step.title}
                              </p>
                              <p className="mt-1 text-sm font-semibold leading-7 text-[#5f586b]">
                                {step.body}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
