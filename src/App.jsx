import { useEffect, useState, useRef, useCallback } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

gsap.registerPlugin(ScrollTrigger)

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null)

  useEffect(() => {
    document.body.classList.add('is-loading')

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        document.body.classList.remove('is-loading')
        onComplete()
      }
    })

    tl.set('.loader-letter', { yPercent: 115, autoAlpha: 0 })
    tl.set('.loader-tag', { y: 14, autoAlpha: 0 })
    tl.set('.loader-meta', { y: 14, autoAlpha: 0 })
    tl.set('.loader-scanline', { scaleX: 0 })
    tl.set('.loader-strip', { scaleY: 0 })

    tl.to('.loader-letter', { yPercent: 0, autoAlpha: 1, duration: 0.64, stagger: 0.035, ease: 'expo.out' }, 0.14)
    tl.to('.loader-tag', { y: 0, autoAlpha: 1, duration: 0.44 }, 0.54)
    tl.to('.loader-meta', { y: 0, autoAlpha: 1, duration: 0.42 }, 0.66)
    tl.to('.loader-brand', { y: -22, scale: 0.94, duration: 0.52, ease: 'power2.inOut' }, 1.05)
    tl.to('.loader-scanline', { scaleX: 1, duration: 0.46, ease: 'power2.inOut' }, 1.08)
    tl.to('.loader-strip', { scaleY: 1, duration: 0.72, stagger: { each: 0.065, from: 'start' }, ease: 'expo.inOut' }, 1.16)
    tl.to(containerRef.current, { yPercent: -100, duration: 0.76, ease: 'expo.inOut' }, 1.82)

    return () => tl.kill()
  }, [onComplete])

  const brandName = 'HUSBA'

  return (
    <div ref={containerRef} className="loading-screen" id="crafexLoader">
      <div className="loader-grid" />

      <div className="loader-brand">
        <img src="/logo.png" alt="HUSBA DIGITAL" className="w-10 h-10 rounded-full object-cover mx-auto mb-4 opacity-90" />
        <div className="loader-brand-main">
          {brandName.split('').map((char, i) => (
            <span key={i} className="loader-letter">
              {char === 'É' ? (
                <><span>E</span><span className="loader-dot">.</span></>
              ) : char}
            </span>
          ))}
        </div>
        <p className="loader-tag">Digital Solutions & IT Services Company</p>
      </div>

      <div className="loader-strips">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="loader-strip" />
        ))}
      </div>

      <div className="loader-scanline" />

      <div className="loader-meta">
        <span>Contact details to be added</span>
        <span>HUSBA DIGITAL &reg;</span>
      </div>
    </div>
  )
}

function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return
    if (!window.matchMedia('(pointer:fine)').matches) return

    const move = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    const addHover = () => cursor.classList.add('hover')
    const removeHover = () => cursor.classList.remove('hover')

    window.addEventListener('pointermove', move)
    const interactiveEls = document.querySelectorAll('a, button')
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      window.removeEventListener('pointermove', move)
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [])

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
}

function FixedCTA() {
  return (
    <Link to="/contact" className="fixed-cta">
      <span>Work With Us</span>
      <span className="cta-arrow">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7" /><path d="M7 7h10v10" />
        </svg>
      </span>
    </Link>
  )
}

function AppInner() {
  return (
    <>
      <ScrollToTop />
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FixedCTA />
    </>
  )
}

function App() {
  const [loaded, setLoaded] = useState(false)

  const handleLoadComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [loaded])

  return (
    <BrowserRouter>
      <CustomCursor />
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      {loaded && <AppInner />}
    </BrowserRouter>
  )
}

export default App
