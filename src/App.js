import React from 'react';

// import aos
import Aos from 'aos'
import 'aos/dist/aos.css'

// import components
import Hero from './components/Hero';
import Videos from './components/Videos';
import Collections from './components/Collections';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  //aos init
  Aos.init({
    duration: 1800,
    offset: 100,
  })
  
  return <div className='overflow-hidden'>
    <Hero />
    <Videos/>
    <Collections/>
    <Contact/>
    <Footer/>
    {/* <div className='h-[2000px]'></div> */}
  </div>;
};

export default App;
