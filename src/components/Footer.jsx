import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const BehanceIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.62.16-1.26.25-1.92.25H0v-15.1h6.938zm-.36 5.91c.64 0 1.17-.14 1.58-.43.41-.29.62-.76.62-1.43 0-.37-.06-.68-.19-.91-.13-.24-.32-.42-.55-.54-.24-.12-.5-.2-.79-.24-.3-.04-.59-.06-.88-.06H3.47v3.61h3.11zm.17 6.27c.34 0 .67-.04.99-.11.32-.08.6-.2.84-.37.24-.17.44-.4.58-.69.15-.3.22-.67.22-1.12 0-.88-.24-1.52-.71-1.92-.47-.4-1.12-.6-1.93-.6H3.47v4.81h3.28zm9.07-9.4h5.94v1.23h-5.94V7.29zm2.97 8.42c.44.42 1.08.63 1.91.63.59 0 1.1-.14 1.52-.42.42-.28.68-.57.8-.87h2.37c-.36 1.12-1.34 1.96-2.88 2.53-1.26.47-2.48.71-3.65.71-1.02 0-1.95-.16-2.8-.49-.85-.33-1.57-.79-2.17-1.39-.6-.6-1.07-1.32-1.4-2.15-.34-.84-.5-1.75-.5-2.75 0-1 .17-1.9.5-2.74.34-.84.81-1.56 1.42-2.15.61-.6 1.34-1.06 2.19-1.38.85-.33 1.76-.49 2.73-.49 1.1 0 2.07.2 2.93.59.86.4 1.57.94 2.13 1.63.56.69.96 1.5 1.2 2.43.24.93.28 1.9.12 2.9h-7.07c-.04.39.08.77.34 1.12l.04.05zm3.28-4.52c-.34-.39-.91-.59-1.62-.59-.51 0-.93.1-1.27.31-.34.21-.58.45-.72.73-.15.28-.23.55-.26.82h4.68c-.06-.58-.38-1.08-.81-1.27z" />
  </svg>
)

const socialLinks = [
  { name: 'Instagram', href: '#contact', icon: InstagramIcon },
  { name: 'LinkedIn', href: '#contact', icon: LinkedInIcon },
  { name: 'X / Twitter', href: '#contact', icon: XIcon },
  { name: 'Behance', href: '#contact', icon: BehanceIcon },
]

const Footer = () => {
  const footerRef = useRef(null)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const el = footerRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelectorAll('.footer-animate'),
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 95%', toggleActions: 'play none none none' },
        }
      )
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="bg-dark-950 overflow-hidden">
      <div className="border-b border-white/10 overflow-hidden py-4">
        <div className="marquee-track text-[13vw] font-bold leading-[.78] tracking-[-.09em] text-brand-500/50">
          <span>HUSBA DIGITAL&reg; HUSBA DIGITAL&reg;&nbsp;</span>
          <span>HUSBA DIGITAL&reg; HUSBA DIGITAL&reg;&nbsp;</span>
        </div>
      </div>

      <div className="container-custom section-padding pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          <div className="lg:col-span-4 footer-animate">
            <Link to="/" className="flex items-center gap-2.5 mb-6 group">
              <img src="/husba-mark.svg" alt="HUSBA DIGITAL" className="w-10 h-10 rounded-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-bold text-white tracking-tight">HUSBA DIGITAL</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-xs leading-relaxed text-sm">
              Crafting digital experiences that elevate brands.
              Your vision, our creativity.
            </p>

            <div className="space-y-3 mb-8">
              <a href="#contact" className="flex items-center gap-3 text-sm text-slate-300 hover:text-brand-300 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                  <Mail size={14} className="text-brand-300" />
                </div>
                Contact details to be added
              </a>
              <a href="tel:+2349012345678" className="flex items-center gap-3 text-sm text-slate-300 hover:text-brand-300 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                  <Phone size={14} className="text-brand-300" />
                </div>
                +234 901 234 5678
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <MapPin size={14} className="text-brand-300" />
                </div>
                Contact details to be added
              </div>
            </div>

            <div className="flex gap-2">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 text-slate-300 flex items-center justify-center hover:bg-brand-500/25 hover:text-brand-300 transition-all duration-300"
                  title={name}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-5 footer-animate">
            <small className="text-slate-400 text-[10px] uppercase tracking-[0.18em] block mb-5 font-semibold">Services</small>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contact" className="text-slate-300 hover:text-brand-300 transition-colors">Social Media</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-brand-300 transition-colors">Content Creation</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-brand-300 transition-colors">Brand Identity</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-brand-300 transition-colors">Digital Marketing</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-brand-300 transition-colors">Strategy & Consulting</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-brand-300 transition-colors">Web & Digital</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 footer-animate">
            <small className="text-slate-400 text-[10px] uppercase tracking-[0.18em] block mb-5 font-semibold">Company</small>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-slate-300 hover:text-brand-300 transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-slate-300 hover:text-brand-300 transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-brand-300 transition-colors">Contact</Link></li>
              <li><a href="#" className="text-slate-300 hover:text-brand-300 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4 footer-animate">
            <small className="text-slate-400 text-[10px] uppercase tracking-[0.18em] block mb-5 font-semibold">Stay in the loop</small>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              Occasional signals, never noise. Brand insights, project spotlights, and the occasional behind-the-scenes.
            </p>
            <label className="flex items-center border-b border-white/20 pb-3 gap-2">
              <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 outline-none" />
              <button type="button" className="w-9 h-9 rounded-full bg-brand-500 text-white flex items-center justify-center hover:bg-brand-400 transition-colors flex-shrink-0">
                <ArrowUpRight size={16} />
              </button>
            </label>
            <div className="flex flex-wrap gap-4 mt-6">
              {socialLinks.map(({ name, href }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                  className="text-[11px] text-slate-400 hover:text-brand-300 transition-colors uppercase tracking-wider font-medium flex items-center gap-1">
                  {name} <ArrowUpRight size={10} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 footer-animate">
          <div className="flex flex-wrap gap-5 text-[11px] text-slate-400 uppercase tracking-wider items-center">
            <span>Contact details to be added</span>
            <span className="hidden md:inline text-slate-600">&middot;</span>
            <span>Working globally</span>
            <span className="hidden md:inline text-slate-600">&middot;</span>
            <span>Contact details to be added</span>
          </div>
          <p className="text-slate-500 text-[11px] uppercase tracking-wider">
            &copy; {currentYear} HUSBA DIGITAL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
