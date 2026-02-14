import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductDetail from './components/ProductDetail';
import SizeGuide from './components/SizeGuide';
import Recipes from './components/Recipes';
import OptionList from './components/OptionList';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <ProductDetail />
      <SizeGuide />
      <Recipes />
      <OptionList />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;