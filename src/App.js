import './App.css';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Technology from './components/Technology';
import WelcomePortfolio from './components/Welcome';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {showWelcome ? (
          <WelcomePortfolio key="welcome" />
        ) : (
          <motion.div
            key="main-content"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            delay={0.3}
            className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"
          >
            <div className="fixed top-0 -z-10 h-full w-full">
              <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>

            <div className="Container mx-auto  px-5  lg:pl-0 pl-5 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
              <Navbar />
              <Hero />
              <About />
              <Technology />
              <Project />
              <ContactForm />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
