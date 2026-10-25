import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { num: '01', title: 'Social Media', desc: 'Full-service management across Instagram, TikTok, LinkedIn, and X for the Nigerian market.', tag: 'Community & Growth' },
  { num: '02', title: 'Content Creation', desc: 'High-quality visual and written content that connects with your audience.', tag: 'Photo & Video' },
  { num: '03', title: 'Brand Identity', desc: "Creating or refreshing a brand's entire visual and verbal identity.", tag: 'Design Systems' },
  { num: '04', title: 'Digital Marketing', desc: 'Data-driven advertising, influencer partnerships, and growth campaigns across Nigeria.', tag: 'Paid Acquisition' },
  { num: '05', title: 'Strategy & Consulting', desc: 'High-level strategic guidance for brands figuring out their digital direction.', tag: 'Growth Roadmaps' },
  { num: '06', title: 'Web & Digital', desc: 'Designing and building digital experiences that actually convert.', tag: 'UI/UX & Dev' },
]

const Services = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-header', {
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.services-header', start: 'top 85%' },
      })
      gsap.from('.service-item', {
        y: 40, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.service-list', start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen divider-grid dark-lines bg-[#A78BFA] overflow-hidden py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-10 text-black/20 font-hand text-xl md:text-2xl rotate-[-4deg]">
        What we do best &rarr;
      </div>

      <div className="container-custom relative z-10">
        <div className="services-header flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-16">
          <div>
            <span className="text-black/50 text-xs font-semibold uppercase tracking-[0.18rem]">Our Practice</span>
            <h2 className="mt-3 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#0F172A]">
              What we do
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-black/60 sm:text-base">
              Everything you need to build, grow, and scale your brand in the digital age — built for the African market.
            </p>
          </div>
        </div>

        <div className="service-list space-y-0">
          {services.map((service) => (
            <div key={service.num} className="service-item service-row group cursor-pointer border-black/10 hover:border-black/20"
              style={{ borderTop: '1px solid rgba(0,0,0,0.12)' }}>
              <span className="text-xs text-black/30 font-semibold">{service.num}</span>
              <h3 className="text-2xl md:text-3xl lg:text-[clamp(2rem,4vw,4.8rem)] font-semibold tracking-tight text-[#0F172A] group-hover:text-[#643D91] transition-colors">
                {service.title}
              </h3>
              <p className="max-w-md text-sm text-black/50 group-hover:text-black/70 transition-colors">
                {service.desc}
              </p>
              <span className="text-[10px] text-black/30 uppercase tracking-wider font-medium group-hover:text-[#643D91]/70 transition-colors">
                {service.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
