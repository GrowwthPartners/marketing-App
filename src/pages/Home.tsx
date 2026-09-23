import { Head } from 'vite-react-ssg'
import CustomisationSection from '../components/CustomisationSection'
import FaqSection, { faqs } from '../components/FaqSection'
import Footer from '../components/Footer'
import FloatingCtaBar from '../components/FloatingCtaBar'
import HeroSection from '../components/HeroSection'
import IndustriesSection from '../components/IndustriesSection'
import MeetJatinSection from '../components/MeetJatinSection'
import Navbar from '../components/Navbar'
import PricingSection from '../components/PricingSection'
import ProblemSection from '../components/ProblemSection'
import ProcessSection from '../components/ProcessSection'
import ServicesSection, { services } from '../components/ServicesSection'
import SocialProofSection from '../components/SocialProofSection'
import WhyUsSection from '../components/WhyUsSection'

const pageTitle = 'Fractional CFO Services for Singapore Businesses | Growwth Partners'
const pageDescription =
  'Virtual and fractional CFO services for Singapore businesses, personally guided by Jatin Detwani.'
const pageUrl = 'https://cfo.growwthpartners.com/'
const socialImage = 'https://cfo.growwthpartners.com/social/cfo-og-card.png'
const socialImageAlt =
  'Jatin Detwani beside the headline Fractional CFO Services for Singapore Businesses.'
const organizationId = `${pageUrl}#organization`
const serviceId = `${pageUrl}#fractional-cfo-service`
const faqId = `${pageUrl}#faq`
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: 'Growwth Partners',
      url: pageUrl,
      logo: 'https://cfo.growwthpartners.com/logo/company-logo.png',
    },
    {
      '@type': 'Service',
      '@id': serviceId,
      name: 'Fractional CFO Services for Singapore Businesses',
      serviceType: 'Fractional CFO Services',
      description: pageDescription,
      url: pageUrl,
      provider: {
        '@id': organizationId,
      },
      areaServed: [
        {
          '@type': 'Country',
          name: 'Singapore',
        },
        {
          '@type': 'Place',
          name: 'International markets',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Fractional CFO service capabilities',
        itemListElement: services.map((service, index) => ({
          '@type': 'Offer',
          position: index + 1,
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            description: service.body,
          },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      '@id': faqId,
      url: `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Growwth Partners" />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content={socialImageAlt} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@growwthpartners" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={socialImage} />
        <meta name="twitter:image:alt" content={socialImageAlt} />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      <div className="flex min-h-screen flex-col bg-[#ffffff] text-[#17120d]">
        <Navbar />
        <FloatingCtaBar />
        <main className="flex-1">
          <HeroSection />
          <ProblemSection />
          <WhyUsSection />
          <div id="stories">
            <SocialProofSection />
          </div>
          <MeetJatinSection />
          <div id="services">
            <ServicesSection />
          </div>
          <CustomisationSection />
          <div id="pricing">
            <PricingSection />
          </div>
          <ProcessSection />
          <IndustriesSection />
          <div id="faq">
            <FaqSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
