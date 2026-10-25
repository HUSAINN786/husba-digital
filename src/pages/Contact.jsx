import { useState, useRef, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  { num: '01', q: 'What is the typical project timeline?', a: 'Brand identity: 6-8 weeks. Website: 8-12 weeks. Social media: ongoing monthly. We provide detailed timelines after discovery.' },
  { num: '02', q: 'How much do your services cost?', a: 'Brand identity from ₦15M, websites from ₦20M, social media from ₦5M/month. Transparent pricing upfront.' },
  { num: '03', q: 'Do you work with startups?', a: 'Absolutely. We offer startup-friendly packages and scale as you grow.' },
  { num: '04', q: 'What is your revision policy?', a: 'We include 3 rounds of revisions per phase to ensure the final deliverable matches your vision perfectly.' },
  { num: '05', q: 'Can you work with our internal team?', a: 'Yes. We integrate with your workflow — Slack, Asana, Figma, Notion, whatever you use.' },
  { num: '06', q: 'Do you take on standalone projects?', a: 'Yes. Focused identity, launch, and digital experience engagements are a natural fit when there is a clear decision to make.' },
  { num: '07', q: 'Do you offer ongoing support?', a: 'Retainer packages for ongoing design, content, and strategy. Many clients stay for years.' },
]

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', project: '', budget: '', message: '',
  })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const pageRef = useRef(null)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-hero-word', { autoAlpha: 0, y: 36, scale: 0.94, duration: 0.84, ease: 'expo.out' })
      gsap.from('.contact-hero-text', { y: 40, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.2, stagger: 0.1 })
      gsap.from('.contact-form-section', {
        y: 60, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-form-section', start: 'top 85%' },
      })
      gsap.from('.faq-item', {
        y: 40, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.faq-section', start: 'top 80%' },
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email'
    if (!formData.project.trim()) newErrors.project = 'Select a project type'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
    setFormData({ name: '', email: '', project: '', budget: '', message: '' })
    setTimeout(() => setStatus('idle'), 3000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const projectTypes = ['Website Development', 'Software Development', 'Business Management Software', 'Graphic Design & Branding', 'Digital Marketing', 'Social Media Management', 'E-commerce Solutions', 'Other']
  const budgetRanges = ['Under ₦2M', '₦2M - ₦5M', '₦5M - ₦15M', '₦15M - ₦30M', '₦30M+', 'Not sure yet']

  return (
    <div ref={pageRef} className="min-h-screen bg-dark-900">
      <section className="poster-section divider-grid bg-[#643D91] flex items-center justify-center h-[70vh] relative overflow-hidden px-6 text-center">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <span className="contact-hero-word huge-word text-white/[0.06] select-none">CONTACT</span>
        </div>
        <div className="relative z-10 max-w-2xl">
          <span className="contact-hero-text inline-block text-white/50 text-xs font-semibold uppercase tracking-[0.22em] mb-5">
            Get in Touch
          </span>
          <h1 className="contact-hero-text text-[clamp(3rem,7vw,7.5rem)] leading-[.85] tracking-[-.07em] font-medium text-white mb-6">
            Let's Start<br />
            <span className="font-display italic">Something New.</span>
          </h1>
          <p className="contact-hero-text text-white/55 text-base max-w-md mx-auto mb-10">
            Great things start with a conversation. Fill out the form and we'll get back within 24 hours.
          </p>
          <div className="contact-hero-text flex items-center justify-center gap-6">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white/15 px-8 py-4 text-sm font-semibold text-white hover:bg-white/25 border border-white/20 transition backdrop-blur-sm">
              Start a project <span>&#8599;</span>
            </a>
            <a href="tel:+2349012345678" className="text-xs text-white/50 border-b border-white/25 pb-0.5 hover:text-white transition-colors">
              +234 901 234 5678
            </a>
          </div>
        </div>
      </section>

      <section className="contact-form-section section-padding pb-20 pt-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            <div className="lg:col-span-4 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">Contact Details</h3>
                <p className="text-white/40 text-sm mb-8">Drop us a line or give us a ring. We love to talk.</p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, title: 'Email', value: 'Contact details to be added', href: 'mailto:Contact details to be added' },
                  { icon: Phone, title: 'Phone', value: '+234 901 234 5678', href: 'tel:+2349012345678' },
                  { icon: MapPin, title: 'Location', value: 'Contact details to be added', href: '#' },
                ].map((item) => (
                  <a key={item.title} href={item.href} className="flex items-center gap-4 group p-4 rounded-xl bg-white/[0.02] border border-white/8 hover:border-brand-500/20 transition-all">
                    <div className="w-11 h-11 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                      <item.icon size={18} className="text-brand-300" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-white/35 uppercase tracking-[0.15em] mb-0.5">{item.title}</span>
                      <span className="text-white/70 group-hover:text-brand-300 transition-colors text-sm font-medium">{item.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/8">
                <h4 className="text-[10px] font-semibold text-white/50 mb-5 uppercase tracking-[0.18em]">Quick Facts</h4>
                <div className="space-y-3">
                  {['Response within 24 hours', 'Free initial consultation', 'NDA available on request', 'Remote & on-site', 'Flexible engagements'].map((fact) => (
                    <div key={fact} className="flex items-center gap-3">
                      <CheckCircle size={14} className="text-brand-300/70 flex-shrink-0" />
                      <span className="text-white/55 text-sm">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/8">
                <h4 className="text-[10px] font-semibold text-white/50 mb-5 uppercase tracking-[0.18em]">Follow Us</h4>
                <div className="flex gap-2">
                  {[
                    { label: 'Instagram', href: '#contact', icon: Instagram },
                    { label: 'LinkedIn', href: '#contact', icon: Linkedin },
                    { label: 'X / Twitter', href: '#contact', icon: XIcon },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/5 text-white/45 flex items-center justify-center hover:bg-brand-500/20 hover:text-brand-300 transition-all"
                      title={s.label}>
                      <s.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/8">
                <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">Send a Message</h3>
                <p className="text-white/40 text-sm mb-8">Tell us about your project and we'll be in touch shortly.</p>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-white/55 mb-2">Full Name <span className="text-brand-300">*</span></label>
                      <input name="name" value={formData.name} onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border transition-colors text-white placeholder-white/25 outline-none focus:border-brand-500 focus:bg-white/[0.06] ${errors.name ? 'border-red-500/50' : 'border-white/10'}`}
                        placeholder="John Doe" />
                      {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm text-white/55 mb-2">Email <span className="text-brand-300">*</span></label>
                      <input name="email" type="email" value={formData.email} onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border transition-colors text-white placeholder-white/25 outline-none focus:border-brand-500 focus:bg-white/[0.06] ${errors.email ? 'border-red-500/50' : 'border-white/10'}`}
                        placeholder="john@company.com" />
                      {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-white/55 mb-2">Project Type <span className="text-brand-300">*</span></label>
                      <select name="project" value={formData.project} onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border transition-colors text-white outline-none focus:border-brand-500 focus:bg-white/[0.06] appearance-none ${errors.project ? 'border-red-500/50' : 'border-white/10'}`}>
                        <option value="" className="bg-dark-900">Select type</option>
                        {projectTypes.map(t => <option key={t} value={t} className="bg-dark-900">{t}</option>)}
                      </select>
                      {errors.project && <p className="text-red-400 text-xs mt-1.5">{errors.project}</p>}
                    </div>
                    <div>
                      <label className="block text-sm text-white/55 mb-2">Budget</label>
                      <select name="budget" value={formData.budget} onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 transition-colors text-white outline-none focus:border-brand-500 focus:bg-white/[0.06] appearance-none">
                        <option value="" className="bg-dark-900">Select budget</option>
                        {budgetRanges.map(b => <option key={b} value={b} className="bg-dark-900">{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/55 mb-2">Project Details <span className="text-brand-300">*</span></label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5}
                      className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border transition-colors text-white placeholder-white/25 outline-none focus:border-brand-500 focus:bg-white/[0.06] resize-none ${errors.message ? 'border-red-500/50' : 'border-white/10'}`}
                      placeholder="Tell us about your project — goals, timeline, budget, and anything else that helps us understand your vision." />
                    {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <p className="text-white/30 text-xs hidden sm:block">We typically respond within 24 hours.</p>
                    <button type="submit" disabled={status === 'submitting'}
                      className="btn-primary flex items-center gap-2 disabled:opacity-50 text-sm px-8 py-3.5">
                      {status === 'submitting' ? (
                        <><Loader2 size={18} className="animate-spin" /> Sending...</>
                      ) : (
                        <>Send Message <Send size={16} /></>
                      )}
                    </button>
                  </div>

                  {status === 'success' && (
                    <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm mt-2">
                      <CheckCircle size={18} /> Thanks! We'll get back within 24 hours.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section section-padding border-t border-white/5">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-brand-300 text-xs font-semibold uppercase tracking-[0.18rem]">Good questions</span>
            <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Answers, without<br />the agency fog.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto border-b border-white/[.08]">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="faq-item border-t border-white/[.08] relative group">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`w-full flex items-center justify-between py-6 px-4 text-left transition-all duration-300 hover:pl-6 ${openFaq === i ? 'text-brand-300' : 'text-white/70 hover:text-white'}`}
                >
                  <span className="flex items-center gap-4 text-[clamp(1rem,1.35vw,1.25rem)] tracking-[-.03em] font-medium">
                    <span className="text-[9px] text-brand-300 tracking-wider font-semibold">{faq.num}</span>
                    {faq.q}
                  </span>
                  <span className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 text-sm ${openFaq === i ? 'bg-brand-500 border-brand-500 text-white rotate-180' : 'border-white/25 text-white/50'}`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-out ${openFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-4 pb-6 text-sm leading-relaxed text-white/50 max-w-2xl">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
