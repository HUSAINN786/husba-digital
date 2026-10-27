import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const services = [
  { title: 'Web Development', line: 'WE DESIGN', description: 'Websites and web experiences made for your business.', initials: 'WD' },
  { title: 'App Development', line: 'WE BUILD', description: 'Useful mobile apps and cross-platform experiences.', initials: 'AD' },
  { title: 'Software Development', line: 'WE ENGINEER', description: 'Custom software that fits the way your team works.', initials: 'SD' },
  { title: 'Web Applications', line: 'WE CONNECT', description: 'Powerful portals, dashboards and online tools.', initials: 'WA' },
  { title: 'Business Management Software', line: 'WE SIMPLIFY', description: 'Smarter systems for everyday business operations.', initials: 'BM' },
  { title: 'Graphic Design & Branding', line: 'WE DEFINE', description: 'Distinctive visual identities and brand systems.', initials: 'GB' },
  { title: 'Digital Marketing', line: 'WE GROW', description: 'Digital campaigns and content that help brands grow.', initials: 'DM' },
]

const Hero = () => {
  const heroRef = useRef(null)
  const lineRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const initialsRef = useRef(null)
  const countRef = useRef(null)

  useEffect(() => {
    const section = heroRef.current
    const line = lineRef.current
    const title = titleRef.current
    const description = descriptionRef.current
    const initials = initialsRef.current
    const count = countRef.current
    if (!section || !line || !title || !description || !initials || !count) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      gsap.from('.hero-word', { autoAlpha: 0, y: 18, duration: reduceMotion ? 0 : 0.55, ease: 'power2.out' })
      gsap.from('.hero-copy', { autoAlpha: 0, y: 12, duration: reduceMotion ? 0 : 0.45, delay: 0.08, ease: 'power2.out' })

      if (reduceMotion) return

      let index = 0
      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.05 })
      timeline.to([line, title, description, initials, count], {
        y: -10,
        autoAlpha: 0,
        duration: 0.22,
        ease: 'power1.in',
        stagger: 0.015,
      })
      timeline.call(() => {
        index = (index + 1) % services.length
        line.textContent = services[index].line
        title.textContent = services[index].title
        description.textContent = services[index].description
        initials.textContent = services[index].initials
        count.textContent = String(index + 1).padStart(2, '0') + ' / ' + String(services.length).padStart(2, '0')
      })
      timeline.fromTo([line, title, description, initials, count],
        { y: 12, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.32, ease: 'power2.out', stagger: 0.018 },
      )
      timeline.to({}, { duration: 2.0 })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="poster-section divider-grid bg-[#643D91] flex items-center justify-center h-screen">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="hero-word font-display text-white/20 text-[29vw] md:text-[23vw] leading-none tracking-[-0.06em] whitespace-nowrap select-none">
          HUSBA
        </span>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-[1.1fr_.9fr] gap-8 md:gap-12 items-center">
        <div className="hero-copy min-w-0">
          <p className="text-xs md:text-sm font-semibold tracking-[0.24em] text-lime-300 uppercase mb-5">
            Your Digital Growth Partner
          </p>
          <p ref={lineRef} className="text-sm md:text-base tracking-[0.18em] text-white/65 font-medium mb-3">WE DESIGN</p>
          <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.055em] leading-[0.98] text-white max-w-2xl min-h-[2em]">
            Web Development
          </h1>
          <p ref={descriptionRef} className="text-sm md:text-base text-white/70 leading-relaxed mt-5 max-w-md min-h-[3em]">
            Websites and web experiences made for your business.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-7">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold text-[#241633] bg-lime-300 hover:bg-lime-200 transition-colors">
              View Our Work &#8594;
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold text-white/80 hover:text-white transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="relative flex items-center justify-center min-h-[260px] md:min-h-[400px]" aria-label="Services changing automatically">
          <div className="absolute w-[min(68vw,340px)] aspect-square rounded-full border border-white/15" />
          <div className="absolute w-[min(52vw,260px)] aspect-square rounded-full border border-lime-300/20" />
          <div className="relative w-[min(74vw,360px)] min-h-[250px] md:min-h-[320px] rounded-[2rem] border border-white/20 bg-white/[0.07] flex flex-col justify-between p-6 md:p-8 shadow-[0_24px_70px_rgba(22,8,42,0.18)]">
            <div className="flex items-start justify-between">
              <div ref={initialsRef} className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-lime-300 text-[#241633] flex items-center justify-center font-bold text-xl">WD</div>
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-white/55 uppercase">Our Services</span>
            </div>
            <div>
              <div className="h-px bg-white/20 mb-5">
                <div className="h-px w-1/3 bg-lime-300" />
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/50 mb-2">HUSBA DIGITAL</p>
              <p className="text-lg md:text-2xl font-medium text-white">Ideas into digital experiences.</p>
            </div>
            <span ref={countRef} className="absolute bottom-6 right-6 text-xs tabular-nums tracking-widest text-white/50">01 / 07</span>
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
