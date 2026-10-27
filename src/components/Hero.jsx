import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const services = [
  { title: 'Web Development', description: 'Websites & web applications', initials: 'WD', color: 'from-violet-500 via-purple-600 to-indigo-700' },
  { title: 'App Development', description: 'Mobile apps & cross-platform experiences', initials: 'AD', color: 'from-blue-500 via-sky-600 to-cyan-700' },
  { title: 'Software Development', description: 'Custom software for your business', initials: 'SD', color: 'from-emerald-500 via-teal-600 to-cyan-800' },
  { title: 'Web Applications', description: 'Portals, dashboards & online tools', initials: 'WA', color: 'from-fuchsia-500 via-purple-600 to-violet-800' },
  { title: 'Business Management Software', description: 'Smarter systems for daily operations', initials: 'BM', color: 'from-orange-500 via-rose-600 to-pink-700' },
  { title: 'Graphic Design & Branding', description: 'Visual identities that stand out', initials: 'GB', color: 'from-cyan-500 via-blue-600 to-indigo-800' },
  { title: 'Digital Marketing', description: 'Content, campaigns & online growth', initials: 'DM', color: 'from-lime-500 via-emerald-600 to-teal-800' },
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
        cards.forEach((card, i) => {
          gsap.set(card, { autoAlpha: i === 0 ? 1 : 0, xPercent: 0, yPercent: 0, rotation: 0, scale: 1 })
        })
        return
      }

      // Layer cards once, then animate only transforms and opacity for mobile-friendly rendering.
      cards.forEach((card, i) => {
        gsap.set(card, {
          xPercent: i === 0 ? 0 : (i % 2 ? 5 : -5),
          yPercent: i * 2.4,
          rotation: i === 0 ? -2 : (i % 2 ? 5 : -5),
          scale: 1 - i * 0.035,
          autoAlpha: i < 3 ? 1 : 0,
          zIndex: cards.length - i,
        })
      })

      let active = 0
      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.1 })
      cards.forEach((card, step) => {
        const nextIndex = (step + 1) % cards.length
        const next = cards[nextIndex]
        timeline.to({}, { duration: 2.15 })
        timeline.to(card, {
          yPercent: -125,
          xPercent: step % 2 === 0 ? -16 : 16,
          rotation: step % 2 === 0 ? -13 : 13,
          scale: 0.82,
          autoAlpha: 0,
          duration: 0.58,
          ease: 'power2.in',
        })
        timeline.set(card, { yPercent: 18, xPercent: step % 2 === 0 ? 7 : -7, rotation: step % 2 === 0 ? 6 : -6, scale: 0.9, autoAlpha: 0 })
        timeline.set(next, { zIndex: cards.length + step + 1 }, '<')
        timeline.fromTo(next,
          { yPercent: 35, xPercent: step % 2 === 0 ? 7 : -7, rotation: step % 2 === 0 ? 7 : -7, scale: 0.88, autoAlpha: 0.7 },
          { yPercent: 0, xPercent: 0, rotation: step % 2 === 0 ? -1 : 1, scale: 1, autoAlpha: 1, duration: 0.72, ease: 'power3.out' },
          '<0.04',
        )
        timeline.call(() => { active = nextIndex })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="poster-section divider-grid relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#643D91] px-4 py-24 md:px-8">
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <span className="font-display select-none whitespace-nowrap text-[30vw] leading-none tracking-[-0.06em] text-white/[0.13] md:text-[23vw]">HUSBA</span>
      </div>

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center">
        <div className="mb-5 text-center md:mb-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-lime-300 md:text-xs">Your Digital Growth Partner</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-4xl">Ideas into digital experiences.</h1>
        </div>

        <div ref={cardsRef} className="relative w-[min(88vw,620px)] h-[min(65svh,680px)] min-h-[370px] md:h-[min(66svh,700px)]" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
          {services.map((service, i) => (
            <article
              key={service.title}
              className={`showcase-card absolute inset-0 overflow-hidden rounded-[28px] border border-white/25 bg-gradient-to-br ${service.color}`}
              style={{
                boxShadow: '0 24px 64px rgba(25, 8, 48, 0.34)',
                transformOrigin: '50% 80%',
                backfaceVisibility: 'hidden',
                willChange: 'transform, opacity',
              }}
            >
              <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,.19), transparent 38%, rgba(10,5,24,.22))' }} />
              <div className="relative flex h-full flex-col justify-between p-6 sm:p-9 md:p-12">
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-2xl font-bold text-white backdrop-blur-sm md:h-20 md:w-20 md:text-3xl">{service.initials}</div>
                  <span className="rounded-full border border-white/25 bg-black/10 px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-white/80 md:text-xs">HUSBA DIGITAL</span>
                </div>

                <div className="max-w-lg">
                  <p className="mb-3 text-xs uppercase tracking-[0.22em] text-white/70 md:text-sm">What we do <span className="ml-2">{String(i + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}</span></p>
                  <h2 className="text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-4xl md:text-6xl">{service.title}</h2>
                  <p className="mt-4 max-w-sm text-base leading-relaxed text-white/80 md:text-xl">{service.description}</p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#38204f] transition-colors hover:bg-lime-200 md:text-sm">View Our Work <span aria-hidden="true">↗</span></Link>
                    <Link to="/contact" className="inline-flex items-center rounded-full border border-white/35 bg-white/10 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/20 md:text-sm">Work With Us</Link>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/25 pt-4 text-[9px] uppercase tracking-[0.2em] text-white/60 md:text-xs">
                  <span>Design. Develop. Deliver.</span>
                  <span>Service {String(i + 1).padStart(2, '0')}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between text-[9px] uppercase tracking-[0.18em] text-white/45 md:bottom-7 md:left-8 md:right-8 md:text-[10px]">
        <span>HUSBA DIGITAL</span>
        <span className="font-hand text-sm normal-case tracking-normal text-white/55 md:text-base">"Your Digital Growth Partner"</span>
      </div>
    </section>
  )
}

export default Hero
