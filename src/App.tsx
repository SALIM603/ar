import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageUpload from './components/ImageUpload';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <ImageUpload />
      <ProductShowcase />
      <Features />
      <Footer />
    </div>
  );
}

export default App;