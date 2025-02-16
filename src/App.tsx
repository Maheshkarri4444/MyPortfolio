import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CarImage from './assets/images/car-dark4.jpg'
import BottomNav from './components/BottomNav';
import { Providers } from './components/Providers';
import Experience from './components/Experience';
import SkillsSection from './components/Skills';
import ServicesSection from './components/Service';
import Projects from './components/Projects';
import RecentProjects from './components/RecentProjects';
import ContactMe from './components/ContactMe';
// // import ReactLenis from 'lenis';
// import { ReactLenis } from '@studio-freight/react-lenis';


function App() {
  return (
      <Providers>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 hero-overlay" />
          <img 
            src={CarImage}
            alt="Background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <About />
            <SkillsSection/>
            <ServicesSection/>  
            <Experience/>
            <RecentProjects/>
            <Projects/>
            <ContactMe/>
          </main>
          <BottomNav/>
        </div>
      </div>
      </Providers>
  );
}

export default App;