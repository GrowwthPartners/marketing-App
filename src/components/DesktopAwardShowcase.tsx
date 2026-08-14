import { motion, useReducedMotion } from 'framer-motion'
import cmoAsia from '../assets/hero/cmo-asia.jpg'
import goldenGlobeTiger from '../assets/hero/golden-globe-tiger.webp'
import innovationAward from '../assets/hero/innovation-excellence-award.png'
import passionVista from '../assets/hero/passion-vista.jpg'
import xero from '../assets/hero/xero.png'

const awardCards = [
  {
    label: 'CMO Asia recognition',
    image: cmoAsia,
    className: 'left-0 top-8 w-48 xl:w-56',
    imageClassName: 'h-24',
    delay: 0.12,
  },
  {
    label: 'Innovation Excellence Award',
    image: innovationAward,
    className: 'right-0 top-24 w-56 xl:w-64',
    imageClassName: 'h-20',
    delay: 0.2,
  },
  {
    label: 'Passion Vista recognition',
    image: passionVista,
    className: 'left-8 bottom-2 w-44 xl:w-52',
    imageClassName: 'h-32',
    delay: 0.28,
  },
  {
    label: 'Xero Silver Partner',
    image: xero,
    className: 'right-12 bottom-2 w-36 xl:w-40',
    imageClassName: 'h-28',
    delay: 0.36,
  },
]

export default function DesktopAwardShowcase() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative mx-auto min-h-[590px] w-full max-w-[38rem] xl:min-h-[660px]">
      <div className="absolute inset-5 rounded-[2.5rem] bg-[linear-gradient(135deg,#3970E2_0%,#5155E1_38%,#843CDA_70%,#EE8CB6_100%)] opacity-95 shadow-[0_30px_90px_rgba(57,112,226,0.28)]" />
      <div className="absolute inset-10 rounded-[2rem] border border-white/30 bg-white/15 backdrop-blur-md" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="absolute left-1/2 top-1/2 z-10 w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/80 bg-white p-5 shadow-[0_24px_80px_rgba(24,28,92,0.22)]"
      >
        <div className="mb-4 rounded-[1.5rem] bg-[#fff8e8] p-3">
          <img
            src={goldenGlobeTiger}
            alt="Golden Globe Tigers Awards"
            className="h-56 w-full object-contain xl:h-64"
            loading="lazy"
          />
        </div>
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#843CDA] text-center">
          Asia's Greatest CFO Award
        </p>
        {/* <p className="mt-2 text-2xl font-black leading-tight text-[#17120d]">
          Senior finance leadership, guided personally by Jatin Detwani.
        </p> */}
      </motion.div>

      {awardCards.map((card) => (
        <motion.div
          key={card.label}
          initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.94 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: card.delay, duration: 0.55, ease: 'easeOut' }}
          whileHover={reduceMotion ? undefined : { y: -6, scale: 1.03 }}
          className={`absolute z-20 rounded-[1.5rem] border border-white/80 bg-white p-4 shadow-[0_18px_50px_rgba(28,24,90,0.18)] ${card.className}`}
        >
          <img
            src={card.image}
            alt={card.label}
            className={`w-full object-contain ${card.imageClassName}`}
            loading="lazy"
          />
        </motion.div>
      ))}

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: 20 }}
        animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
        transition={{ delay: 0.44, duration: 0.5, ease: 'easeOut' }}
        className="absolute right-6 top-6 z-30 rounded-full border border-white/70 bg-white px-4 py-2 text-sm font-bold text-[#5155E1] shadow-[0_14px_34px_rgba(28,24,90,0.16)]"
      >
        5.0 rated
      </motion.div>
    </div>
  )
}
