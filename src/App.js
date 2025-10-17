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
import Achievement from './components/Achievement.js';
import Assistance from './components/Assistance.js';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000); // 4 seconds
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">

      {/* ✅ Fixed Background stays always */}
      <div className="fixed top-0 left-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      {/* ✅ Swappable Content Area */}
      <AnimatePresence mode="wait">
        {showWelcome ? (
          <WelcomePortfolio key="welcome" />
        ) : (

          <motion.div
            key="main"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="Container mx-auto px-5 lg:pl-0 pl-5">
              <Assistance/>
              <Navbar />
              <Hero />
              <About />
              <Technology />
              <Achievement />
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
