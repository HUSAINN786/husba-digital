import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { id: 1, title: 'Digital Business Platform', category: 'Concept · Web Application', tags: ['Web Development', 'UI/UX'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80', color: '#A78BFA' },
  { id: 2, title: 'Brand & Visual System', category: 'Concept · Branding', tags: ['Branding', 'Graphic Design'], img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80', color: '#8b6be0' },
  { id: 3, title: 'E-commerce Experience', category: 'Concept · Web', tags: ['E-commerce', 'Web Design'], img: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1920&q=80', color: '#643D91' },
  { id: 4, title: 'Business Management Tool', category: 'Concept · Software', tags: ['Custom Software', 'Product Design'], img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80', color: '#A78BFA' },
  { id: 5, title: 'Digital Campaign System', category: 'Concept · Digital Marketing', tags: ['Digital Marketing', 'Social Media'], img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80', color: '#8b6be0' },
]

const Projects = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-hero-word', { autoAlpha: 0, y: 36, scale: 0.94, duration: 0.84, ease: 'expo.out' })
      gsap.from('.projects-hero-sub', { y: 40, opacity: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' })

      gsap.utils.toArray('.project-full').forEach((panel, index, panels) => {
        if (index === panels.length - 1) return
        ScrollTrigger.create({ trigger: panel, start: 'top top', end: 'bottom top', pin: true, pinSpacing: false })
        gsap.to(panel, {
          scale: 0.92, y: -28, filter: 'brightness(.45)', ease: 'none',
          scrollTrigger: { trigger: panels[index + 1], start: 'top bottom', end: 'top top', scrub: true },
        })
      })

      gsap.utils.toArray('.project-full > img').forEach((image) => {
        gsap.fromTo(image, { scale: 1.16 }, {
          scale: 1, ease: 'none',
          scrollTrigger: { trigger: image.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1 },
        })
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-dark-900">
      <section className="poster-section divider-grid bg-[#643D91] flex items-end h-[70vh] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <span className="projects-hero-word huge-word text-white/[0.06] select-none">WORK</span>
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-24 pb-16 w-full">
          <span className="projects-hero-sub inline-block text-white/50 text-xs font-semibold uppercase tracking-[0.18rem] mb-4">
            Our Work
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[clamp(4rem,7vw,8rem)] font-semibold tracking-tight text-white mb-4 leading-[.88]">
            Concept<br />Showcase
          </h1>
          <p className="projects-hero-sub text-xl text-white/60 max-w-2xl">
            Concept visuals showing the kinds of digital experiences HUSBA DIGITAL can create. These are illustrative concepts, not claimed client case studies.
          </p>
        </div>
      </section>

      {projects.map((project) => (
        <article key={project.id} className="project-full">
          <img src={project.img} alt={project.title} />
          <div className="project-shade" />
          <div className="absolute left-6 bottom-6 md:left-8 md:bottom-8 z-10">
            <p className="text-[10px] text-white/60 uppercase tracking-widest mb-2">{project.category}</p>
            <h3 className="text-[clamp(2.6rem,4.7vw,5.5rem)] leading-[.9] tracking-[-.07em] font-semibold text-white">{project.title}</h3>
            <div className="flex gap-2 mt-3">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[9px] text-white/40 uppercase tracking-wider bg-white/10 px-2 py-1 rounded-full backdrop-blur-sm">{tag}</span>
              ))}
            </div>
          </div>
          <Link to="/contact" className="absolute right-5 bottom-5 md:right-8 md:bottom-8 z-10 w-[72px] h-[72px] md:w-[82px] md:h-[82px] rounded-full bg-white text-dark-900 flex items-center justify-center text-[10px] font-semibold uppercase text-center p-3 hover:rotate-[8deg] hover:scale-105 transition-transform">
            View project<br /><span>&#8599;</span>
          </Link>
        </article>
      ))}
    </div>
  )
}

export default Projects
