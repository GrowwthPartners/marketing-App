import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import appboxo from '../assets/logos/appboxo.webp'
import dataLeap from '../assets/logos/Data-leap-client.webp'
import ebility from '../assets/logos/ebility.webp'
import greenA from '../assets/logos/GreenA.webp'
import hybrid from '../assets/logos/hybrid.webp'
import juvoxa from '../assets/logos/juvoxa.webp'
import kayaFounders from '../assets/logos/kaya-founders.webp'
import manaClient from '../assets/logos/Mana-client.webp'
import mangtas from '../assets/logos/mangtas.webp'
import okeyReply from '../assets/logos/okeyReply.webp'
import ronpos from '../assets/logos/ronpos.webp'
import tigerhall from '../assets/logos/tigerhall.webp'
import treeDots from '../assets/logos/TreeDots-client.webp'

const logos = [
  dataLeap,
  appboxo,
  ebility,
  greenA,
  hybrid,
  manaClient,
  juvoxa,
  kayaFounders,
  mangtas,
  treeDots,
  okeyReply,
  ronpos,
  tigerhall,
]

export default function TrustedLogosSection() {
  const reduceMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobile(mediaQuery.matches)

    update()
    mediaQuery.addEventListener('change', update)

    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  const logoList = useMemo(
    () => (reduceMotion ? logos : [...logos, ...logos]),
    [reduceMotion],
  )

  return (
    <section className="relative left-1/2 mt-12 w-screen -translate-x-1/2 px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-[#ece8e3] bg-white px-5 py-10 shadow-[0_24px_80px_rgba(28,24,90,0.08)] sm:px-7 lg:px-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.02em] text-[#17120d] sm:text-3xl">
            Trusted by 200+ startups and businesses around the world
          </h3>
          <p className="mt-4 text-base font-semibold leading-7 text-[#5f586b] sm:text-lg">
            Curious to learn more? Book a free call with our expert to discuss your
            business needs and save time and effort.
          </p>
        </motion.div>

        {isMobile === false && (
          <div className="relative mt-10">
            <div className="absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-white to-transparent" />
            <div className="absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-white to-transparent" />

            <div className="overflow-hidden">
              <motion.div
                className="flex w-max items-center"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        x: ['0%', '-50%'],
                      }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 28,
                        ease: 'linear',
                        repeat: Infinity,
                      }
                }
              >
                {logoList.map((logo, index) => (
                  <div
                    key={`${index}-${logo}`}
                    className="mx-5 flex h-24 w-40 shrink-0 items-center justify-center rounded-[1.5rem] border border-[#f0edf8] bg-[#fcfbff] px-5 py-4 shadow-[0_12px_36px_rgba(28,24,90,0.05)]"
                  >
                    <img
                      src={logo}
                      alt="Partner logo"
                      className="max-h-12 w-auto max-w-full object-contain transition duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
