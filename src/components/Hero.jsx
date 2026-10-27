import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const services = [
  { title: 'Web Development', description: 'Websites & web applications', initials: 'WD', color: 'from-violet-500 via-purple-600 to-indigo-800', accent: '#D5FF6B', number: '01' },
  { title: 'App Development', description: 'Mobile apps & cross-platform experiences', initials: 'AD', color: 'from-blue-500 via-sky-600 to-cyan-800', accent: '#9DF7FF', number: '02' },
  { title: 'Software Development', description: 'Custom software for your business', initials: 'SD', color: 'from-emerald-500 via-teal-600 to-cyan-900', accent: '#B9FFD8', number: '03' },
  { title: 'Web Applications', description: 'Portals, dashboards & online tools', initials: 'WA', color: 'from-fuchsia-500 via-purple-700 to-violet-900', accent: '#F8C7FF', number: '04' },
  { title: 'Business Management Software', description: 'Smarter systems for daily operations', initials: 'BM', color: 'from-orange-500 via-rose-600 to-pink-800', accent: '#FFE0A8', number: '05' },
  { title: 'Graphic Design & Branding', description: 'Visual identities that stand out', initials: 'GB', color: 'from-cyan-500 via-blue-700 to-indigo-900', accent: '#B9F7FF', number: '06' },
  { title: 'Digital Marketing', description: 'Content, campaigns & online growth', initials: 'DM', color: 'from-lime-500 via-emerald-600 to-teal-900', accent: '#E8FF91', number: '07' },
]

const Hero = () => {
  const heroRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const root = heroRef.current
    const cards = cardsRef.current?.querySelectorAll('.showcase-card')
    if (!root || !cards?.length) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduceMotion) {
        cards.forEach((card, i) => gsap.set(card, { autoAlpha: i === 0 ? 1 : 0 }))
        return
      }

      cards.forEach((card, i) => {
        gsap.set(card, {
          autoAlpha: i === 0 ? 1 : i < 3 ? 0.42 : 0,
          x: i === 0 ? 0 : (i % 2 ? 15 : -15),
          y: i * 9,
          rotateY: i === 0 ? -2 : i % 2 ? 7 : -7,
          rotateX: i === 0 ? 0 : 3,
          scale: 1 - i * 0.035,
          zIndex: cards.length - i,
        })
      })

      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.15 })
      cards.forEach((card, i) => {
        const next = cards[(i + 1) % cards.length]
        timeline.to({}, { duration: 2.15 })
        timeline.to(card, {
          x: i % 2 === 0 ? -70 : 70,
          y: -80,
          rotateY: i % 2 === 0 ? -15 : 15,
          rotateX: 5,
          scale: 0.86,
          autoAlpha: 0,
          duration: 0.58,
          ease: 'power2.in',
        })
        timeline.set(card, { x: i % 2 === 0 ? 16 : -16, y: 26, rotateY: i % 2 === 0 ? 7 : -7, rotateX: 3, scale: 0.91, autoAlpha: 0 })
        timeline.set(next, { zIndex: cards.length + i + 1 }, '<')
        timeline.fromTo(next,
          { x: i % 2 === 0 ? 45 : -45, y: 70, rotateY: i % 2 === 0 ? 12 : -12, rotateX: -3, scale: 0.91, autoAlpha: 0.65 },
          { x: 0, y: 0, rotateY: 0, rotateX: 0, scale: 1, autoAlpha: 1, duration: 0.78, ease: 'power3.out' },
          '<0.05',
        )
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="poster-section divider-grid relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#643D91] px-4 py-20 sm:px-6 md:px-10">
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <span className="font-display select-none whitespace-nowrap text-[32vw] leading-none tracking-[-0.075em] text-white/[0.10] md:text-[25vw]">HUSBA</span>
        <div className="absolute left-[-12%] top-[12%] h-48 w-48 rounded-full bg-fuchsia-400/15 blur-3xl md:h-72 md:w-72" />
        <div className="absolute bottom-[10%] right-[-8%] h-52 w-52 rounded-full bg-lime-300/10 blur-3xl md:h-80 md:w-80" />
      </div>

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">
        <div className="mb-5 flex w-full max-w-4xl items-end justify-between gap-4 md:mb-7">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-lime-300 md:text-xs">Your Digital Growth Partner</p>
            <h1 className="max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-3xl md:text-5xl">Digital, designed to move you forward.</h1>
          </div>
          <span className="hidden pb-1 text-xs uppercase tracking-[0.2em] text-white/50 sm:block">Independent digital studio</span>
        </div>

        <div ref={cardsRef} className="relative h-[min(66svh,690px)] min-h-[390px] w-full max-w-4xl sm:h-[min(68svh,720px)]" style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}>
          {services.map((service, i) => (
            <article
              key={service.title}
              className={`showcase-card absolute inset-0 overflow-hidden rounded-[26px] border border-white/25 bg-gradient-to-br ${service.color} sm:rounded-[34px]`}
              style={{
                boxShadow: '0 28px 70px rgba(20, 5, 42, 0.28)',
                transformOrigin: '50% 80%',
                backfaceVisibility: 'hidden',
                willChange: 'transform, opacity',
              }}
            >
              <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,.20), transparent 36%, rgba(10,5,24,.27))' }} />
              <div className="pointer-events-none absolute right-[-7%] top-[14%] select-none text-[42vw] font-semibold leading-none tracking-[-0.1em] text-white/[0.09] sm:right-[0%] sm:text-[26vw] md:text-[21rem]">{service.initials}</div>
              <div className="relative flex h-full flex-col justify-between p-5 sm:p-8 md:p-12">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/35 bg-white/15 text-xl font-bold text-white md:h-[72px] md:w-[72px] md:text-2xl" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,.2)' }}>{service.initials}</div>
                  <span className="rounded-full border border-white/30 bg-black/10 px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm md:text-[10px]">HUSBA DIGITAL</span>
                </div>

                <div className="relative max-w-2xl">
                  <div className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-white/75 md:text-xs">
                    <span style={{ color: service.accent }}>●</span>
                    <span>Service {service.number} / 07</span>
                    <span className="h-px w-10 bg-white/35" />
                    <span>Design. Develop. Deliver.</span>
                  </div>
                  <h2 className="max-w-2xl text-3xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl md:text-7xl">{service.title}</h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">{service.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3 md:mt-8">
                    <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#38204f] transition-colors hover:bg-lime-200 md:px-6 md:py-3.5 md:text-sm">Explore our work <span aria-hidden="true">↗</span></Link>
                    <Link to="/contact" className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/20 md:px-6 md:py-3.5 md:text-sm">Start a project</Link>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/25 pt-3 text-[9px] uppercase tracking-[0.18em] text-white/65 md:pt-4 md:text-[10px]">
                  <span>Built around your next idea</span>
                  <span className="text-white/85">{service.number} <span className="text-white/45">— 07</span></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-3 left-5 right-5 z-20 flex items-end justify-between text-[9px] uppercase tracking-[0.18em] text-white/45 md:bottom-5 md:left-8 md:right-8 md:text-[10px]">
        <span>HUSBA DIGITAL</span>
        <span className="font-hand text-sm normal-case tracking-normal text-white/55 md:text-base">"Your Digital Growth Partner"</span>
      </div>
    </section>
  )
}

export default Hero
