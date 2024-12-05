'use client'
import React from 'react';
import "aos/dist/aos.css";
import AOS from "aos";
import HeroSection from '@/components/Hero';
import { useEffect } from "react";
import Page2 from '@/components/Page2';
import Page3 from '@/components/Page3';
import FeedbackPage from '@/components/Testimonials';
import ContactPage from '@/components/Contact';




const App: React.FC = () => {
    useEffect (()=> {
        AOS.init({
            easing:"ease-out-back",
            duration: 1200,
            delay:100,
            mirror:true,
            anchorPlacement:"bottom-bottom",
            offset:160,
        });
        AOS.refresh();
     }, []);
  return (
    <div>
      <HeroSection/>
      <Page2/>
      <Page3/>
      <FeedbackPage/>
      <ContactPage/>
    

      
    </div>
  )
}

export default App;
