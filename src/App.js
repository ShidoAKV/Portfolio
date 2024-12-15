import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Technology from './components/Technology';
import WelcomePortfolio from './components/Welcome';
import { useState,useEffect } from 'react';

function App() {

   const [showWelcome, setShowWelcome] = useState(true);

  // Hide WelcomePortfolio after 5 seconds and show MainContent
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 7000); 

    // Cleanup the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);
  

  return (
   <div>
     {showWelcome ?<WelcomePortfolio /> :
       <div className=' overflow-x-hidden  text-neutral-300 antialiased  selection:bg-cyan-300  selection:text-cyan-900'>
      <div className='fixed top-0 -z-10  h-full w-full'>
         <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
    <div className='Container mx-auto px-8'>
    <Navbar/>
    <Hero/>
    <About/>
    <Technology/>
    <Project/>
    {/* <Contact/> */}
    <ContactForm/>

    </div>

     </div>
    } 
    </div>
  );
}

export default App;
