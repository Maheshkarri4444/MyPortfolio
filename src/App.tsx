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
import SparkleEffect from './components/SparkleEffect';
import { MouseTrail } from './components/MouseTrail';

function App() {
  return (
    <Providers>
      <div className="relative min-h-screen">
      {/* <MouseTrail /> */}
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
          <main className="relative">
            <section id="home" className="min-h-screen">
              <Hero />
            </section>
            <section id="about" className="min-h-screen">
              <About />
              <SkillsSection/>
            </section>
            <section id="services" className="min-h-screen">
              <ServicesSection/>  
              <Experience/>
            </section>
            <section id="projects" className="min-h-screen">
              <RecentProjects/>
              <Projects/>
            </section>
            <section id="contact" className="min-h-screen">
              <ContactMe/>
            </section>
          </main>
          <BottomNav/>
        </div>
      </div>
    </Providers>
  );
}

export default App;