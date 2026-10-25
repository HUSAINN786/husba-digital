import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const archiveImages = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
  'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=600&q=80',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80',
]

const manifestoWords = [
  'STRATEGY', 'DESIGN', 'CONTENT', 'IDENTITY', 'GROWTH',
  'CULTURE', 'VISION', 'IMPACT', 'FUTURE', 'STORY',
]

const values = [
  { num: '01', title: 'No Ordinary', desc: 'Every project must stand out. We push creative boundaries until the work speaks.' },
  { num: '02', title: 'Strategy First', desc: 'Beautiful design without strategy is just decoration. We research, plan, execute with purpose.' },
  { num: '03', title: 'Client Partners', desc: 'Your brand is our business. We treat every client like a partner, not a number.' },
  { num: '04', title: 'Excellence', desc: 'Good enough never enters our vocabulary. We obsess over details and refine until it hurts.' },
  { num: '05', title: 'On Time', desc: 'Deadlines are sacred. When we commit to a date, we deliver. Action, not promises.' },
  { num: '06', title: 'African Market', desc: 'We build useful, accessible digital experiences around each business’s goals.' },
]

const milestones = [
  { year: '01', title: 'Discover', desc: 'Start with business goals, audience needs, and the problem to solve.' },
  { year: '02', title: 'Design', desc: 'Create a clear experience and visual direction that fits the brief.' },
  { year: '03', title: 'Develop', desc: 'Build responsive websites, applications, and useful digital tools.' },
  { year: '04', title: 'Deliver', desc: 'Prepare a thoughtful launch and a foundation for future improvements.' },
]

export const Interlude = () => {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=130%', scrub: 1, pin: true }
      })
      tl.fromTo('#interludeWord', { x: '24vw', rotate: 5 }, { x: '-58vw', rotate: -3, ease: 'none' }, 0)
      tl.fromTo('.interlude-brush-1', { x: '-8vw', scale: 0.6, rotate: -20 }, { x: '6vw', scale: 1.15, rotate: 4, ease: 'none' }, 0)
      tl.fromTo('.interlude-brush-2', { y: '14vh', scale: 0.5 }, { y: '-8vh', scale: 1.1, ease: 'none' }, 0)
      tl.from('.interlude-copy', { autoAlpha: 0, y: 40, ease: 'none' }, 0.2)
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="poster-section h-screen divider-grid dark-lines bg-[#A78BFA] flex items-center overflow-hidden">
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
        <span id="interludeWord" className="sweep-word text-[#643D91]/70 font-display">
          BUILD FOR WHAT’S NEXT
        </span>
      </div>

      <div className="interlude-brush-1 absolute top-[15%] left-[10%] w-[200px] h-[300px] rounded-full bg-[#8b6be0]/30 blur-[60px] pointer-events-none" />
      <div className="interlude-brush-2 absolute bottom-[20%] right-[15%] w-[250px] h-[250px] rounded-full bg-[#643D91]/20 blur-[50px] pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-3xl">
        <div className="interlude-copy">
          <span className="hand text-[#0F172A]/50 text-lg mb-4 block rotate-[-2deg]">more than an agency</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#0F172A] leading-[0.95]">
            We are the<br />
            <span className="font-display italic">artists of craft.</span>
          </h2>
          <p className="mt-6 text-[#0F172A]/60 text-base max-w-lg leading-relaxed">
            From HUSBA DIGITAL to the world, we build brands that move people. Every pixel, every word, every strategy — intentional.
          </p>
        </div>
      </div>
    </section>
  )
}

export const Manifesto = () => {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=140%', scrub: 1, pin: true }
      })

      tl.fromTo('.manifesto-word',
        { autoAlpha: 0, y: () => gsap.utils.random(-80, 80), x: () => gsap.utils.random(-60, 60), rotate: () => gsap.utils.random(-12, 12), scale: 0.7 },
        { autoAlpha: 1, y: 0, x: 0, rotate: 0, scale: 1, stagger: { each: 0.06, from: 'random' }, ease: 'power3.out' },
        0
      )

      tl.fromTo('#manifestoCopy', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, ease: 'none' }, 0.5)
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="poster-section h-screen divider-grid dark-lines bg-[#020617] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(100,61,145,0.4),transparent_32%),radial-gradient(circle_at_80%_72%,rgba(167,139,250,0.3),transparent_30%)]" />

      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        <div className="manifesto-sentence mb-10">
          {manifestoWords.map((word, i) => (
            <span key={word} className="manifesto-word text-white/50 hover:text-white/80 transition-colors cursor-default">
              {word}
            </span>
          ))}
        </div>

        <div id="manifestoCopy" className="text-center max-w-2xl">
          <span className="hand text-brand-300 text-xl mb-4 block rotate-[-2deg]">our manifesto</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-[1.05] tracking-tight mb-4">
            Brands don't happen.<br />
            <span className="font-display text-brand-300 italic">They are built.</span>
          </h2>
          <p className="text-white/45 text-sm leading-relaxed max-w-lg mx-auto">
            With intention. With craft. With the kind of obsessive attention that separates good from unforgettable. That is what we do.
          </p>
        </div>
      </div>
    </section>
  )
}

export const ArchiveGrid = () => {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=120%', scrub: 1, pin: true }
      })

      tl.fromTo('.archive-grid', { y: 80, scale: 0.9 }, { y: 0, scale: 1, ease: 'power2.out' }, 0)
      tl.fromTo('.archive-img', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: { each: 0.06, from: 'random' }, ease: 'power3.out' }, 0.1)
      tl.fromTo('.archive-hand', { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, ease: 'none' }, 0.4)
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="poster-section h-screen divider-grid bg-[#0F172A] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10 text-white/30 font-hand text-lg rotate-[-3deg]">
        Selected works &rarr;
      </div>

      <div className="archive-grid">
        {archiveImages.map((img, i) => (
          <img key={i} src={img} alt={`Archive ${i + 1}`} className="archive-img rounded-sm" loading="lazy" />
        ))}
      </div>

      <div className="archive-hand mt-8 text-center z-10">
        <span className="font-hand text-brand-300 text-xl">Crafted with obsession &middot; Digital solutions</span>
      </div>
    </section>
  )
}

export const ValuesBoard = () => {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=130%', scrub: 1, pin: true }
      })

      tl.fromTo('.op-card',
        { y: () => gsap.utils.random(60, 140), x: () => gsap.utils.random(-40, 40), rotate: () => gsap.utils.random(-8, 8), autoAlpha: 0 },
        { y: 0, x: 0, rotate: 0, autoAlpha: 1, stagger: { each: 0.08, from: 'random' }, ease: 'power3.out' },
        0
      )

      tl.fromTo('#boardLabel', { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, ease: 'none' }, 0.3)
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="poster-section min-h-screen divider-grid dark-lines bg-[#A78BFA] flex flex-col items-center justify-center overflow-hidden py-24 px-6">
      <div id="boardLabel" className="absolute top-6 left-6 md:top-10 md:left-10 z-10 text-[#0F172A]/40 font-hand text-lg rotate-[-2deg]">
        How we think &rarr;
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-semibold text-[#0F172A] tracking-tight text-center mb-12">
          Our <span className="font-display italic">Operating System</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((value) => (
            <div key={value.num} className="op-card rounded-lg">
              <div>
                <span className="text-brand-500/40 text-xs font-semibold">{value.num}</span>
                <h3 className="text-white text-lg font-semibold mt-1 mb-2">{value.title}</h3>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const ImpactStats = () => {
  const ref = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=130%', scrub: 1, pin: true }
      })

      tl.fromTo('.stat-panel',
        { y: 100, autoAlpha: 0, scale: 0.9 },
        { y: 0, autoAlpha: 1, scale: 1, stagger: 0.1, ease: 'power3.out' },
        0
      )

      tl.fromTo('#impactLabel', { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, ease: 'none' }, 0.2)

      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 80%',
        onEnter: () => {
          let start = 0
          const target = 150
          const t0 = performance.now()
          function run(now) {
            const p = Math.min(1, (now - t0) / 1400)
            setCount(Math.round(target * (1 - Math.pow(1 - p, 3))))
            if (p < 1) requestAnimationFrame(run)
          }
          requestAnimationFrame(run)
        },
        once: true,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const stats = [
    { value: 'Web', label: 'Development' },
    { value: 'Custom', label: 'Software' },
    { value: 'Digital', label: 'Growth' },
  ]

  return (
    <section ref={ref} className="poster-section h-screen divider-grid bg-[#643D91] flex flex-col items-center justify-center overflow-hidden px-6">
      <div id="impactLabel" className="absolute top-6 left-6 md:top-10 md:left-10 z-10 text-white/30 font-hand text-lg rotate-[-2deg]">
        The numbers &rarr;
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight text-center mb-12">
          Impact <span className="font-display italic">at Scale</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-panel bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 md:p-8 text-center">
              <span className="block text-3xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </span>
              <span className="text-white/60 text-xs uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between text-white/30 text-[10px] uppercase tracking-[0.18em] pointer-events-none">
        <span>Est. 2019 &middot; Contact details to be added</span>
        <span className="font-hand text-base tracking-normal normal-case text-white/40">"We move when we say we move"</span>
      </div>
    </section>
  )
}

export const CTASection = () => {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=120%', scrub: 1, pin: true }
      })

      tl.fromTo('#wipeRose', { scaleY: 0 }, { scaleY: 1, ease: 'none' }, 0.24)
      tl.fromTo('#wipeEmerald', { scaleX: 0 }, { scaleX: 1, ease: 'none' }, 0.58)
      tl.fromTo('.cta-content', { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, stagger: 0.08, ease: 'power3.out' }, 0.7)
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="poster-section h-screen bg-[#0F172A] flex items-center justify-center overflow-hidden">
      <div id="wipeRose" className="absolute inset-0 origin-bottom bg-[#8b6be0]" style={{ transform: 'scaleY(0)' }} />
      <div id="wipeEmerald" className="absolute inset-0 origin-left bg-[#A78BFA]" style={{ transform: 'scaleX(0)' }} />

      <div className="relative z-20 text-center px-6 max-w-3xl">
        <span className="cta-content text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50 mb-6 block">Ready to begin?</span>
        <h2 className="cta-content text-[clamp(2.5rem,6vw,7rem)] leading-[0.85] tracking-[-.07em] font-medium text-white mb-6">
          Ready to Elevate<br />
          <span className="font-display text-brand-300 italic">Your Brand?</span>
        </h2>
        <p className="cta-content text-white/45 text-base max-w-lg mx-auto mb-10">
          Let's create something extraordinary together. One conversation can change everything.
        </p>
        <div className="cta-content flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/contact" className="inline-flex items-center gap-2 group text-sm px-10 py-4 rounded-full bg-brand-500 text-white font-semibold transition hover:bg-brand-400"
            style={{ boxShadow: 'inset 0 0.0625rem 0 rgba(255,255,255,.18), inset 0 -0.125rem .375rem rgba(0,0,0,.22)' }}>
            Start Your Project
            <span>&#8599;</span>
          </Link>
          <a href="#contact" className="text-xs text-white/50 border-b border-white/25 pb-0.5 hover:text-white hover:border-white/50 transition-colors">
            Contact details to be added
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 z-10 text-white/30 text-[10px] uppercase tracking-[0.18em] pointer-events-none">
        HUSBA DIGITAL &middot; Accra &middot; Nairobi &middot; Johannesburg
      </div>
    </section>
  )
}
