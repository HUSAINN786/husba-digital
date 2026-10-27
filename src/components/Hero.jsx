import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const profileCards = [
  { name: 'Web Development', role: 'Websites & web applications', initials: 'WD', color: 'from-brand-500 to-violet-600' },
  { name: 'App Development', role: 'Mobile apps & cross-platform experiences', initials: 'AD', color: 'from-blue-500 to-cyan-600' },
  { name: 'Software Development', role: 'Custom software built around your workflow', initials: 'SD', color: 'from-emerald-500 to-teal-600' },
  { name: 'Web Applications', role: 'Powerful portals, dashboards & online tools', initials: 'WA', color: 'from-fuchsia-500 to-purple-700' },
  { name: 'Business Management Software', role: 'Smarter systems for everyday operations', initials: 'BM', color: 'from-orange-500 to-rose-600' },
  { name: 'Graphic Design & Branding', role: 'Visual identities that people remember', initials: 'GB', color: 'from-cyan-500 to-blue-700' },
  { name: 'Digital Marketing', role: 'Content, campaigns & online growth', initials: 'DM', color: 'from-lime-500 to-emerald-700' },
]

const Hero = () => {
  const heroRef = useRef(null)
  const cardsContainerRef = useRef(null)

  useEffect(() => {
    const cards = cardsContainerRef.current?.querySelectorAll('.hero-card')
    if (!cards?.length) return

    const ctx = gsap.context(() => {
      gsap.from('.hero-word', {
        autoAlpha: 0, y: 24, duration: 0.6, ease: 'power2.out',
      })
      gsap.from('.hero-copy', {
        y: 16, autoAlpha: 0, duration: 0.5, ease: 'power2.out', delay: 0.15,
      })

      // Keep one active card; use a light transform/opacity-only loop for mobile performance.
      gsap.set(cards, { yPercent: 120, xPercent: 0, rotation: 0, scale: 0.94, autoAlpha: 0 })
      gsap.set(cards[0], { yPercent: 0, rotation: -3, scale: 1, autoAlpha: 1 })

      const cycle = gsap.timeline({ repeat: -1, repeatDelay: 0.15 })
      cards.forEach((card, i) => {
        const next = cards[(i + 1) % cards.length]
        cycle.to({}, { duration: 1.65 })
        cycle.to(card, {
          yPercent: -125,
          xPercent: i % 2 === 0 ? -5 : 5,
          rotation: i % 2 === 0 ? -8 : 8,
          scale: 0.9,
          autoAlpha: 0,
          duration: 0.62,
          ease: 'power2.in',
        })
        cycle.fromTo(next,
          { yPercent: 115, xPercent: i % 2 === 0 ? 4 : -4, rotation: i % 2 === 0 ? 7 : -7, scale: 0.94, autoAlpha: 0 },
          { yPercent: 0, xPercent: 0, rotation: i % 2 === 0 ? -2 : 2, scale: 1, autoAlpha: 1, duration: 0.72, ease: 'power3.out' },
          '<0.08',
        )
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="poster-section divider-grid bg-[#643D91] flex items-center justify-center h-screen">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="hero-word font-display text-white/35 text-[28vw] md:text-[22vw] leading-none tracking-[-0.055em] whitespace-nowrap select-none">
          HUSBA
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6" style={{ perspective: '1100px' }}>
        <div ref={cardsContainerRef} className="relative w-[min(78vw,320px)] h-[min(96vw,420px)] max-h-[48vh] min-h-[280px] md:w-[340px] md:h-[440px] md:max-h-[52vh] mb-7" style={{ transformStyle: 'preserve-3d' }}>
          {profileCards.map((card, i) => (
            <div
              key={card.name}
              className="hero-card absolute inset-0 rounded-2xl overflow-hidden"
              style={{
                background: '#0F172A',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '20px 28px 48px rgba(0,0,0,0.32)',
                willChange: 'transform, opacity',
                zIndex: profileCards.length - i,
              }}
            >
              <div className={`relative w-full h-full bg-gradient-to-br ${card.color} flex flex-col items-center justify-center text-white p-5 md:p-7`}>
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(115deg, rgba(255,255,255,0.16), transparent 38%, rgba(0,0,0,0.2))' }} />
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/20 flex items-center justify-center text-2xl font-bold mb-5 border border-white/25">
                  {card.initials}
                </div>
                <h3 className="relative text-xl md:text-2xl font-semibold text-center leading-tight">{card.name}</h3>
                <p className="relative text-sm md:text-base text-white/75 text-center mt-3 max-w-[260px] leading-relaxed">{card.role}</p>
                <span className="absolute bottom-5 left-5 text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/60">
                  HUSBA DIGITAL <span className="ml-2">{String(i + 1).padStart(2, '0')} / {String(profileCards.length).padStart(2, '0')}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="hero-copy text-center max-w-xl pointer-events-auto">
          <h2 className="text-xl md:text-3xl font-semibold text-white leading-tight tracking-tight mb-2">
            We craft digital experiences that elevate brands.
          </h2>
          <p className="text-sm text-white/65 mb-5">
            From websites and apps to business software, branding, and digital growth.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 transition-all">
              View Our Work &#8594;
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold text-white/75 hover:text-white transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between text-white/40 text-[10px] uppercase tracking-[0.18em] pointer-events-none">
        <span>HUSBA DIGITAL</span>
        <span className="font-hand text-base tracking-normal normal-case text-white/50">"Your Digital Growth Partner"</span>
      </div>
    </section>
  )
}

export default Hero
