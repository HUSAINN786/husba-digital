import { useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const profileCards = [
  { name: 'Web Development', role: 'Websites & web applications', initials: 'WD', color: 'from-brand-500 to-violet-600' },
  { name: 'Custom Software', role: 'Business systems & tools', initials: 'CS', color: 'from-blue-500 to-cyan-600' },
  { name: 'Digital Growth', role: 'Branding, design & marketing', initials: 'DG', color: 'from-emerald-500 to-teal-600' },
]

const Hero = () => {
  const heroRef = useRef(null)
  const cardsContainerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-word', { autoAlpha: 0, y: 36, scale: 0.94, duration: 0.84, ease: 'expo.out', delay: 0.2 })
      gsap.from('.hero-card', { y: 95, autoAlpha: 0, stagger: 0.1, duration: 0.82, ease: 'power3.out', delay: 0.4 })
      gsap.from('.hero-copy', { y: 30, autoAlpha: 0, duration: 0.62, ease: 'power2.out', delay: 0.6 })

      const heroTimeline = gsap.timeline({
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: '+=80%', scrub: 1, pin: true }
      })

      heroTimeline
        .to('.hero-card:nth-child(1)', { x: '-12vw', y: '4vh', rotate: -12, ease: 'none' }, 0)
        .to('.hero-card:nth-child(3)', { x: '12vw', y: '-3vh', rotate: 12, ease: 'none' }, 0)
        .to('.hero-card:nth-child(2)', { y: '-6vh', rotate: 3, scale: 1.05, ease: 'none' }, 0)
        .to('.hero-word', { scale: 1.12, y: '-4vh', ease: 'none' }, 0)
        .to('.hero-copy', { autoAlpha: 0, y: 40, ease: 'none' }, 0.3)

      cardsContainerRef.current?.querySelectorAll('.hero-card').forEach((card, i) => {
        gsap.to(card, {
          duration: 4 + Math.random() * 2,
          y: `+=${6 + Math.random() * 8}`,
          rotationX: `+=${Math.random() * 2 - 1}`,
          rotationY: `+=${Math.random() * 2 - 1}`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
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

      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6" style={{ perspective: '1400px' }}>
        <div ref={cardsContainerRef} className="relative w-[260px] h-[340px] md:w-[300px] md:h-[400px] mb-8" style={{ transformStyle: 'preserve-3d' }}>
          {profileCards.map((card, i) => (
            <div key={card.name} className="hero-card absolute rounded-2xl overflow-hidden"
              style={{
                width: '100%',
                height: '100%',
                background: '#0F172A',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.16)',
                boxShadow: `32px 48px 80px rgba(0,0,0,0.45)`,
                transform: `translateZ(${(2 - i) * 30}px) rotateY(${(i - 1) * 8}deg) rotateX(${(i === 1 ? -3 : i === 0 ? 5 : -2)}deg)`,
                zIndex: 3 - i,
              }}>
              <div className="relative w-full h-full overflow-hidden">
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'linear-gradient(115deg, rgba(255,255,255,0.18), transparent 34%, rgba(0,0,0,0.32))',
                  mixBlendMode: 'screen',
                }} />
                <div className={`w-full h-full bg-gradient-to-br ${card.color} flex flex-col items-center justify-center text-white p-6`}>
                  <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold mb-4 border border-white/20">
                    {card.initials}
                  </div>
                  <h3 className="text-lg font-semibold text-center">{card.name}</h3>
                  <p className="text-sm text-white/70 text-center mt-1">{card.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hero-copy text-center max-w-xl pointer-events-auto">
          <h2 className="text-2xl md:text-4xl font-semibold text-white leading-tight tracking-tight mb-3">
            We craft digital experiences that elevate brands.
          </h2>
          <p className="text-sm text-white/60 mb-6">
            Web development, custom software, business systems, branding, and digital growth solutions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 transition-all">
              View Our Work &#8594;
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold text-white/70 hover:text-white transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between text-white/40 text-[10px] uppercase tracking-[0.18em] pointer-events-none">
        <span>Q4_24 &middot; HUSBA DIGITAL</span>
        <span className="font-hand text-base tracking-normal normal-case text-white/50">"Your Digital Growth Partner"</span>
      </div>
    </section>
  )
}

export default Hero
