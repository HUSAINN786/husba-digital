import Hero from '../components/Hero'
import Services from '../components/Services'
import { Interlude, Manifesto, ArchiveGrid, ValuesBoard, ImpactStats, CTASection } from '../components/HomeSections'

const Home = () => {
  return (
    <div className="min-h-screen bg-dark-900">
      <Hero />
      <Services />
      <Interlude />
      <Manifesto />
      <ArchiveGrid />
      <ValuesBoard />
      <ImpactStats />
      <CTASection />
    </div>
  )
}

export default Home
