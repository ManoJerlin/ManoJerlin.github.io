import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { MouseGlow } from './components/MouseGlow';
import { BackgroundParticles } from './components/BackgroundParticles';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen bg-bg-dark text-white selection:bg-accent-purple/35 selection:text-white antialiased">
          {/* Global Interactive Backgrounds & Cursors */}
          <BackgroundParticles />
          <MouseGlow />
          <CustomCursor />
          <ScrollProgressBar />

          {/* Main Layout Layer */}
          <div className="relative z-20 flex flex-col min-h-screen">
            <Navbar />
            
            <main className="flex-grow">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Services />
              <Experience />
              <Contact />
            </main>

            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
