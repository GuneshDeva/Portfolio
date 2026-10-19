import { useState } from 'react';
import Navbar from '@/components/Navbar';
import AnimatedBackground from '@/components/AnimatedBackground';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import CreativeSkills from '@/components/CreativeSkills';
import GitHubActivity from '@/components/GitHubActivity';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'dark theme-dark' : 'theme-light'} relative min-h-screen bg-[#18247a] text-textmain`}>
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((value) => !value)} />
      <main className="portfolio-surface relative mx-auto max-w-[1440px] overflow-hidden shadow-2xl shadow-[#07104a]/30">
        <AnimatedBackground />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <CreativeSkills />
        <GitHubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
