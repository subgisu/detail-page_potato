import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-stone-100 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
         src={`${import.meta.env.BASE_URL}images/hero-potatoes.png`}
          alt="Fresh Potatoes in Soil" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-transparent to-stone-900/40"></div>
      </div>
      
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-24 text-center text-white h-[80vh] flex flex-col justify-center items-center">
        <div className="mb-4 inline-block px-4 py-1 border border-white/50 rounded-full text-sm font-light tracking-widest bg-black/20 backdrop-blur-sm">
          산지직송 프리미엄
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight drop-shadow-lg">
          포슬포슬한<br/>
          <span className="text-amber-400">흙감자</span>의 매력
        </h1>
        <p className="text-lg md:text-xl font-light opacity-90 mb-8 leading-relaxed max-w-md mx-auto">
          입안 가득 퍼지는 고소한 풍미.<br/>
          강원도의 맑은 햇살과 바람이 키운<br/>
          진짜 햇감자를 새벽녘 농수산에서 만나보세요.
        </p>
        
        <div className="animate-bounce mt-12">
          <svg className="w-8 h-8 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
