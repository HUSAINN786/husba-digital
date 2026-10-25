import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const team = [
  { name: 'Website Development', role: 'Websites & web applications', initials: 'WD', color: 'from-brand-500 to-violet-600', bio: 'Responsive digital experiences designed around your audience and business goals.' },
  { name: 'Software Solutions', role: 'Custom tools & business systems', initials: 'SS', color: 'from-blue-500 to-cyan-600', bio: 'Practical software that helps teams simplify workflows and operate more efficiently.' },
  { name: 'Brand & Design', role: 'Visual identity & creative', initials: 'BD', color: 'from-emerald-500 to-teal-600', bio: 'Clear, consistent brand systems and graphic design for digital-first businesses.' },
  { name: 'Digital Growth', role: 'Marketing & social media', initials: 'DG', color: 'from-orange-500 to-amber-600', bio: 'Digital marketing and social media support aligned with your goals.' },
]

const milestones = [
  { year: '01', title: 'Discover', desc: 'Understand the business, audience, goals, and practical constraints before choosing a solution.' },
  { year: '02', title: 'Plan', desc: 'Shape the right approach, scope, content structure, and visual direction.' },
  { year: '03', title: 'Build', desc: 'Develop responsive, maintainable digital experiences with care and attention to detail.' },
  { year: '04', title: 'Improve', desc: 'Prepare for launch and identify sensible next steps for ongoing improvement.' },
]

const clients = [
  { name: 'Website Development', sector: 'Websites & web apps' },
  { name: 'Software Development', sector: 'Custom business tools' },
  { name: 'Business Management', sector: 'Operational systems' },
  { name: 'Branding & Design', sector: 'Visual communication' },
  { name: 'Digital Marketing', sector: 'Digital growth' },
  { name: 'E-commerce', sector: 'Online catalogues & stores' },
]

const About = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-hero-word', { autoAlpha: 0, y: 36, scale: 0.94, duration: 0.84, ease: 'expo.out' })
      gsap.from('.about-hero-sub', { y: 40, opacity: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' })
      gsap.from('.about-card', { y: 95, autoAlpha: 0, stagger: 0.1, duration: 0.82, ease: 'power3.out', delay: 0.4 })

      gsap.from('.about-section', {
        y: 60, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-content', start: 'top 80%' },
      })

      gsap.from('.builder-card', {
        x: 80, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.builder-section', start: 'top 75%' },
      })

      gsap.from('.op-card-about', {
        y: 60, autoAlpha: 0, rotate: () => gsap.utils.random(-5, 5), stagger: 0.1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.values-section', start: 'top 75%' },
      })

      gsap.from('.team-profile', {
        y: 50, autoAlpha: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.team-section', start: 'top 80%' },
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-dark-900">

      {/* Hero */}
      <section className="poster-section divider-grid bg-[#643D91] flex items-center justify-center h-screen relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <span className="about-hero-word huge-word text-white/[0.06] select-none">ABOUT</span>
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <span className="about-hero-sub inline-block text-white/50 text-xs font-semibold uppercase tracking-[0.18rem] mb-4">About HUSBA DIGITAL</span>
          <h1 className="about-hero-word text-5xl md:text-7xl lg:text-[clamp(4rem,7vw,8rem)] font-semibold text-white leading-[.96] tracking-tight mb-6">
            We Build Brands<br />
            <span className="font-display italic">That Move People.</span>
          </h1>
          <p className="about-hero-sub text-lg text-white/60 max-w-xl mx-auto leading-relaxed mb-8">
            Digital products, thoughtful design, and technology built around business goals.
          </p>
          <div className="about-hero-sub flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white/15 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/25 border border-white/20 transition backdrop-blur-sm">
              Work With Us <span>&#8599;</span>
            </Link>
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold text-white/70 hover:text-white hover:border-white/30 transition">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Origin Story with Builder Shell */}
      <section className="builder-section relative min-h-screen divider-grid dark-lines bg-[#020617] flex items-center py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="container-custom relative z-10 grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl about-section">
            <span className="text-brand-300 text-xs font-semibold uppercase tracking-[0.18rem]">How It Started</span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
              From Yaba to<br />the whole of Africa.
            </h2>
            <div className="mt-8 space-y-5 about-section">
              <p className="text-white/60 leading-relaxed">
                In 2019, Olamide Adeyemi was a freelance designer in HUSBA DIGITAL, tired of seeing Nigerian brands settle for mediocre digital presence. He started HUSBA DIGITAL from a small apartment in Yaba with nothing but a laptop, a cracked phone, and an unreasonable amount of ambition.
              </p>
              <p className="text-white/60 leading-relaxed">
                Today, HUSBA DIGITAL is a team of 12 creatives, strategists, and builders — working from our studio in Ikeja, HUSBA DIGITAL, with clients across Nigeria, Ghana, Kenya, and South Africa.
              </p>
              <p className="text-white font-medium leading-relaxed">
                We started with one belief: every Nigerian brand has a story worth telling. We just help tell it better.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3 about-section">
              {[{ value: '150+', label: 'Projects' }, { value: '50+', label: 'Capabilities' }, { value: '8+', label: 'Years' }].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-2xl font-semibold tracking-tight text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="builder-card builder-shell rounded-2xl p-8 md:p-10 flex flex-col justify-between mx-auto">
            <div>
              <span className="text-brand-300 text-xs font-semibold uppercase tracking-[0.18rem]">Timeline</span>
              <h3 className="mt-3 text-2xl font-semibold text-white mb-8">How We Got Here</h3>
              <div className="space-y-6">
                {milestones.map((m) => (
                  <div key={m.year} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-14">
                      <span className="text-brand-300 font-bold text-sm">{m.year}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-500 border-[3px] border-[#0F172A] flex-shrink-0 relative z-10" />
                    </div>
                    <div className="pb-4">
                      <h4 className="text-white font-semibold text-sm mb-1">{m.title}</h4>
                      <p className="text-white/50 text-xs leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Board */}
      <section className="values-section relative min-h-screen divider-grid dark-lines bg-[#A78BFA] flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10 text-[#0F172A]/40 font-hand text-lg rotate-[-2deg]">
          How we think &rarr;
        </div>
        <div className="relative z-10 w-full max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-semibold text-[#0F172A] tracking-tight text-center mb-12">
            Our <span className="font-display italic">Operating System</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { num: '01', title: 'No Ordinary', desc: 'Every project must stand out. We push creative boundaries until the work speaks.' },
              { num: '02', title: 'Strategy First', desc: 'Beautiful design without strategy is just decoration. We research, plan, execute with purpose.' },
              { num: '03', title: 'Client Partners', desc: 'Your brand is our business. We treat every client like a partner, not a number.' },
              { num: '04', title: 'Excellence', desc: 'Good enough never enters our vocabulary. We obsess over details and refine until it hurts.' },
              { num: '05', title: 'On Time', desc: 'Deadlines are sacred. When we commit to a date, we deliver.' },
              { num: '06', title: 'African Market', desc: 'We build useful, accessible digital experiences around each business’s goals.' },
            ].map((v) => (
              <div key={v.num} className="op-card-about op-card rounded-lg">
                <div>
                  <span className="text-brand-500/40 text-xs font-semibold">{v.num}</span>
                  <h3 className="text-white text-lg font-semibold mt-1 mb-2">{v.title}</h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section relative min-h-screen divider-grid bg-[#0F172A] flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
        <div className="relative z-10 w-full max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-brand-300 text-xs font-semibold uppercase tracking-[0.18rem]">The People</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Meet the <span className="font-display italic">Team</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="team-profile profile-card soft-sheen rounded-2xl overflow-hidden group cursor-pointer">
                <div className={`bg-gradient-to-br ${member.color} p-6 flex flex-col items-center text-center h-[280px] justify-center`}>
                  <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold text-white mb-4 border border-white/20 group-hover:scale-110 transition-transform">
                    {member.initials}
                  </div>
                  <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                  <p className="text-white/70 text-sm mt-1">{member.role}</p>
                </div>
                <div className="p-5">
                  <p className="text-white/50 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative min-h-[60vh] divider-grid dark-lines bg-[#643D91] flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
        <div className="relative z-10 w-full max-w-5xl text-center">
          <span className="text-white/50 text-xs font-semibold uppercase tracking-[0.18rem]">Who We Work With</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-white mb-12">
            Brands That Trust Us
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client) => (
              <div key={client.name} className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm hover:bg-white/15 transition-all group">
                <p className="text-white font-semibold text-sm mb-1 group-hover:text-brand-300 transition-colors">{client.name}</p>
                <p className="text-white/50 text-xs">{client.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-[60vh] bg-[#0F172A] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,61,145,0.25),transparent_50%)]" />
        <div className="relative z-10 text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
            Ready to Build<br />Something Bold?
          </h2>
          <p className="text-white/45 text-base max-w-md mx-auto mb-10">
            Whether you are launching a new brand or scaling an existing one, we are ready to move.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-10 py-4 text-sm font-semibold text-white hover:bg-brand-400 transition"
              style={{ boxShadow: 'inset 0 0.0625rem 0 rgba(255,255,255,.18), inset 0 -0.125rem .375rem rgba(0,0,0,.22)' }}>
              Let's Talk <span>&#8599;</span>
            </Link>
            <a href="#contact" className="text-sm text-white/50 hover:text-white transition">
              Contact details to be added
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
