import React, { useState, useEffect } from 'react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-stone-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 md:hidden animate-slide-up">
      <button 
        onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
        className="w-full bg-amber-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-amber-700 transition-colors text-lg"
      >
        구매하러 가기
      </button>
    </div>
  );
};

export default FloatingCTA;