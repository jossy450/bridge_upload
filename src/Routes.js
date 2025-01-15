import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Careers from './Careers';
import FAQs from './FAQs';
import Testimonials from './Testimonials';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/testimonials" element={<Testimonials />} />
    </Routes>
  );
}

export default AppRoutes;
