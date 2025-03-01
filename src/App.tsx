import React from 'react';
import { Helmet } from 'react-helmet-async';
import CryptoTicker from './components/CryptoTicker';
import HeroSection from './components/HeroSection';
import FeatureSlider from './components/FeatureSlider';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Treżor.io/start | Starting Up Your Device | Treżor®</title>
        <meta name="description" content="Learn how to set up your Trezor device with our comprehensive guide. Secure your crypto assets with Treżor.io/start and follow our step-by-step instructions." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      
      {/* Header with live crypto ticker */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/trezor-icon.svg" alt="Trezor Logo" className="h-10 w-10 mr-3" />
            <h1 className="text-2xl font-bold text-green-800">Treżor.io/start</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-700 hover:text-green-800 font-medium">Features</a>
            <a href="#guide" className="text-gray-700 hover:text-green-800 font-medium">Guide</a>
            <a href="#support" className="text-gray-700 hover:text-green-800 font-medium">Support</a>
            <a href="https://trezor.io/start" className="text-gray-700 hover:text-green-800 font-medium">Treżor.io/start</a>
          </nav>
          <button className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
            Get Started
          </button>
        </div>
        <CryptoTicker />
      </header>
      
      <main>
        <HeroSection />
        <FeatureSlider />
        <ContentSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;