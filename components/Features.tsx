import React from 'react';
import { Truck, MapPin, Sprout, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block border-2 border-amber-500 text-amber-600 font-bold px-3 py-1 rounded-full mb-6 text-sm">
          FRESH POTATO
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-12">
          산지직송으로<br />
          <span className="text-amber-600">신선함을 그대로 담다.</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <FeatureItem 
            icon={<MapPin className="w-8 h-8 text-amber-600" />}
            title="청정지역 재배"
            desc="강원도 고랭지의 맑은 땅"
          />
          <FeatureItem 
            icon={<Sprout className="w-8 h-8 text-amber-600" />}
            title="100% 햇감자"
            desc="묵은 감자가 아닌 햇것"
          />
          <FeatureItem 
            icon={<Truck className="w-8 h-8 text-amber-600" />}
            title="산지 직송"
            desc="중간 유통 없는 신선함"
          />
          <FeatureItem 
            icon={<ShieldCheck className="w-8 h-8 text-amber-600" />}
            title="꼼꼼한 선별"
            desc="상처 없는 최상급 품질"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{icon: React.ReactNode, title: string, desc: string}> = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center group">
    <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors duration-300">
      {icon}
    </div>
    <h3 className="font-bold text-lg mb-1">{title}</h3>
    <p className="text-stone-500 text-sm break-keep">{desc}</p>
  </div>
);

export default Features;