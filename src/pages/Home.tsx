import { Head } from 'vite-react-ssg'
import CustomisationSection from '../components/CustomisationSection'
import FaqSection from '../components/FaqSection'
import Footer from '../components/Footer'
import FloatingCtaBar from '../components/FloatingCtaBar'
import HeroSection from '../components/HeroSection'
import IndustriesSection from '../components/IndustriesSection'
import MeetJatinSection from '../components/MeetJatinSection'
import Navbar from '../components/Navbar'
import PricingSection from '../components/PricingSection'
import ProcessSection from '../components/ProcessSection'
import ProblemSection from '../components/ProblemSection'
import ServicesSection from '../components/ServicesSection'
import SocialProofSection from '../components/SocialProofSection'
import WhyUsSection from '../components/WhyUsSection'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Fractional CFO Services for Singapore Businesses</title>
        <meta
          name="description"
          content="Virtual and fractional CFO services for Singapore businesses, personally guided by Jatin Detwani."
        />
      </Head>
      <div className="flex min-h-screen flex-col bg-[#ffffff] text-[#17120d]">
        <Navbar />
        <FloatingCtaBar />
        <main className="flex-1">
          <HeroSection />
          <ProblemSection />
          <WhyUsSection />
          <SocialProofSection />
          <MeetJatinSection />
          <ServicesSection />
          <CustomisationSection />
          <PricingSection />
          <ProcessSection />
          <IndustriesSection />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
